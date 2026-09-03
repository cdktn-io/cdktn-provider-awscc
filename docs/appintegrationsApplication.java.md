# `appintegrationsApplication` Submodule <a name="`appintegrationsApplication` Submodule" id="@cdktn/provider-awscc.appintegrationsApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppintegrationsApplication <a name="AppintegrationsApplication" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_application awscc_appintegrations_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer"></a>

```java
import io.cdktn.providers.awscc.appintegrations_application.AppintegrationsApplication;

AppintegrationsApplication.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationSourceConfig(AppintegrationsApplicationApplicationSourceConfig)
    .name(java.lang.String)
    .namespace(java.lang.String)
//  .applicationConfig(AppintegrationsApplicationApplicationConfig)
//  .applicationType(java.lang.String)
//  .description(java.lang.String)
//  .iframeConfig(AppintegrationsApplicationIframeConfig)
//  .initializationTimeout(java.lang.Number)
//  .isService(java.lang.Boolean|IResolvable)
//  .permissions(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<AppintegrationsApplicationTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.applicationSourceConfig">applicationSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig">AppintegrationsApplicationApplicationSourceConfig</a></code> | Application source config. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the application. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | The namespace of the application. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.applicationConfig">applicationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig">AppintegrationsApplicationApplicationConfig</a></code> | The application configuration. Cannot be used when IsService is true. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.applicationType">applicationType</a></code> | <code>java.lang.String</code> | The type of application. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The application description. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.iframeConfig">iframeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig">AppintegrationsApplicationIframeConfig</a></code> | The iframe configuration. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.initializationTimeout">initializationTimeout</a></code> | <code>java.lang.Number</code> | The initialization timeout in milliseconds. Required when IsService is true. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.isService">isService</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates if the application is a service. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.permissions">permissions</a></code> | <code>java.util.List<java.lang.String></code> | The configuration of events or requests that the application has access to. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags">AppintegrationsApplicationTags</a>></code> | The tags (keys and values) associated with the application. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationSourceConfig`<sup>Required</sup> <a name="applicationSourceConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.applicationSourceConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig">AppintegrationsApplicationApplicationSourceConfig</a>

Application source config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_application#application_source_config AppintegrationsApplication#application_source_config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_application#name AppintegrationsApplication#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

The namespace of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_application#namespace AppintegrationsApplication#namespace}

---

##### `applicationConfig`<sup>Optional</sup> <a name="applicationConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.applicationConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig">AppintegrationsApplicationApplicationConfig</a>

The application configuration. Cannot be used when IsService is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_application#application_config AppintegrationsApplication#application_config}

---

##### `applicationType`<sup>Optional</sup> <a name="applicationType" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.applicationType"></a>

- *Type:* java.lang.String

The type of application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_application#application_type AppintegrationsApplication#application_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The application description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_application#description AppintegrationsApplication#description}

---

##### `iframeConfig`<sup>Optional</sup> <a name="iframeConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.iframeConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig">AppintegrationsApplicationIframeConfig</a>

The iframe configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_application#iframe_config AppintegrationsApplication#iframe_config}

---

##### `initializationTimeout`<sup>Optional</sup> <a name="initializationTimeout" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.initializationTimeout"></a>

- *Type:* java.lang.Number

The initialization timeout in milliseconds. Required when IsService is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_application#initialization_timeout AppintegrationsApplication#initialization_timeout}

---

##### `isService`<sup>Optional</sup> <a name="isService" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.isService"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates if the application is a service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_application#is_service AppintegrationsApplication#is_service}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.permissions"></a>

- *Type:* java.util.List<java.lang.String>

The configuration of events or requests that the application has access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_application#permissions AppintegrationsApplication#permissions}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags">AppintegrationsApplicationTags</a>>

The tags (keys and values) associated with the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_application#tags AppintegrationsApplication#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putApplicationConfig">putApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putApplicationSourceConfig">putApplicationSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putIframeConfig">putIframeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetApplicationConfig">resetApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetApplicationType">resetApplicationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetIframeConfig">resetIframeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetInitializationTimeout">resetInitializationTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetIsService">resetIsService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetPermissions">resetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApplicationConfig` <a name="putApplicationConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putApplicationConfig"></a>

```java
public void putApplicationConfig(AppintegrationsApplicationApplicationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putApplicationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig">AppintegrationsApplicationApplicationConfig</a>

---

##### `putApplicationSourceConfig` <a name="putApplicationSourceConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putApplicationSourceConfig"></a>

```java
public void putApplicationSourceConfig(AppintegrationsApplicationApplicationSourceConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putApplicationSourceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig">AppintegrationsApplicationApplicationSourceConfig</a>

---

##### `putIframeConfig` <a name="putIframeConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putIframeConfig"></a>

```java
public void putIframeConfig(AppintegrationsApplicationIframeConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putIframeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig">AppintegrationsApplicationIframeConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<AppintegrationsApplicationTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags">AppintegrationsApplicationTags</a>>

---

##### `resetApplicationConfig` <a name="resetApplicationConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetApplicationConfig"></a>

```java
public void resetApplicationConfig()
```

##### `resetApplicationType` <a name="resetApplicationType" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetApplicationType"></a>

```java
public void resetApplicationType()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetIframeConfig` <a name="resetIframeConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetIframeConfig"></a>

```java
public void resetIframeConfig()
```

##### `resetInitializationTimeout` <a name="resetInitializationTimeout" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetInitializationTimeout"></a>

```java
public void resetInitializationTimeout()
```

##### `resetIsService` <a name="resetIsService" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetIsService"></a>

```java
public void resetIsService()
```

##### `resetPermissions` <a name="resetPermissions" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetPermissions"></a>

```java
public void resetPermissions()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppintegrationsApplication resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isConstruct"></a>

```java
import io.cdktn.providers.awscc.appintegrations_application.AppintegrationsApplication;

AppintegrationsApplication.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.appintegrations_application.AppintegrationsApplication;

AppintegrationsApplication.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.appintegrations_application.AppintegrationsApplication;

AppintegrationsApplication.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.appintegrations_application.AppintegrationsApplication;

AppintegrationsApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AppintegrationsApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AppintegrationsApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AppintegrationsApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AppintegrationsApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AppintegrationsApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationArn">applicationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationConfig">applicationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference">AppintegrationsApplicationApplicationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationSourceConfig">applicationSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference">AppintegrationsApplicationApplicationSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.iframeConfig">iframeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference">AppintegrationsApplicationIframeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList">AppintegrationsApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationConfigInput">applicationConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig">AppintegrationsApplicationApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationSourceConfigInput">applicationSourceConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig">AppintegrationsApplicationApplicationSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationTypeInput">applicationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.iframeConfigInput">iframeConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig">AppintegrationsApplicationIframeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.initializationTimeoutInput">initializationTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.isServiceInput">isServiceInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.permissionsInput">permissionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags">AppintegrationsApplicationTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationType">applicationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.initializationTimeout">initializationTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.isService">isService</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.permissions">permissions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationArn`<sup>Required</sup> <a name="applicationArn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationArn"></a>

```java
public java.lang.String getApplicationArn();
```

- *Type:* java.lang.String

---

##### `applicationConfig`<sup>Required</sup> <a name="applicationConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationConfig"></a>

```java
public AppintegrationsApplicationApplicationConfigOutputReference getApplicationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference">AppintegrationsApplicationApplicationConfigOutputReference</a>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `applicationSourceConfig`<sup>Required</sup> <a name="applicationSourceConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationSourceConfig"></a>

```java
public AppintegrationsApplicationApplicationSourceConfigOutputReference getApplicationSourceConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference">AppintegrationsApplicationApplicationSourceConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `iframeConfig`<sup>Required</sup> <a name="iframeConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.iframeConfig"></a>

```java
public AppintegrationsApplicationIframeConfigOutputReference getIframeConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference">AppintegrationsApplicationIframeConfigOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.tags"></a>

```java
public AppintegrationsApplicationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList">AppintegrationsApplicationTagsList</a>

---

##### `applicationConfigInput`<sup>Optional</sup> <a name="applicationConfigInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationConfigInput"></a>

```java
public IResolvable|AppintegrationsApplicationApplicationConfig getApplicationConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig">AppintegrationsApplicationApplicationConfig</a>

---

##### `applicationSourceConfigInput`<sup>Optional</sup> <a name="applicationSourceConfigInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationSourceConfigInput"></a>

```java
public IResolvable|AppintegrationsApplicationApplicationSourceConfig getApplicationSourceConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig">AppintegrationsApplicationApplicationSourceConfig</a>

---

##### `applicationTypeInput`<sup>Optional</sup> <a name="applicationTypeInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationTypeInput"></a>

```java
public java.lang.String getApplicationTypeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `iframeConfigInput`<sup>Optional</sup> <a name="iframeConfigInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.iframeConfigInput"></a>

```java
public IResolvable|AppintegrationsApplicationIframeConfig getIframeConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig">AppintegrationsApplicationIframeConfig</a>

---

##### `initializationTimeoutInput`<sup>Optional</sup> <a name="initializationTimeoutInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.initializationTimeoutInput"></a>

```java
public java.lang.Number getInitializationTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `isServiceInput`<sup>Optional</sup> <a name="isServiceInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.isServiceInput"></a>

```java
public java.lang.Boolean|IResolvable getIsServiceInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.permissionsInput"></a>

```java
public java.util.List<java.lang.String> getPermissionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.tagsInput"></a>

```java
public IResolvable|java.util.List<AppintegrationsApplicationTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags">AppintegrationsApplicationTags</a>>

---

##### `applicationType`<sup>Required</sup> <a name="applicationType" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationType"></a>

```java
public java.lang.String getApplicationType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `initializationTimeout`<sup>Required</sup> <a name="initializationTimeout" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.initializationTimeout"></a>

```java
public java.lang.Number getInitializationTimeout();
```

- *Type:* java.lang.Number

---

##### `isService`<sup>Required</sup> <a name="isService" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.isService"></a>

```java
public java.lang.Boolean|IResolvable getIsService();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.permissions"></a>

```java
public java.util.List<java.lang.String> getPermissions();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppintegrationsApplicationApplicationConfig <a name="AppintegrationsApplicationApplicationConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appintegrations_application.AppintegrationsApplicationApplicationConfig;

AppintegrationsApplicationApplicationConfig.builder()
//  .contactHandling(AppintegrationsApplicationApplicationConfigContactHandling)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig.property.contactHandling">contactHandling</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling">AppintegrationsApplicationApplicationConfigContactHandling</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_application#contact_handling AppintegrationsApplication#contact_handling}. |

---

##### `contactHandling`<sup>Optional</sup> <a name="contactHandling" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig.property.contactHandling"></a>

```java
public AppintegrationsApplicationApplicationConfigContactHandling getContactHandling();
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling">AppintegrationsApplicationApplicationConfigContactHandling</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_application#contact_handling AppintegrationsApplication#contact_handling}.

---

### AppintegrationsApplicationApplicationConfigContactHandling <a name="AppintegrationsApplicationApplicationConfigContactHandling" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling.Initializer"></a>

```java
import io.cdktn.providers.awscc.appintegrations_application.AppintegrationsApplicationApplicationConfigContactHandling;

AppintegrationsApplicationApplicationConfigContactHandling.builder()
//  .scope(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling.property.scope">scope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_application#scope AppintegrationsApplication#scope}. |

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_application#scope AppintegrationsApplication#scope}.

---

### AppintegrationsApplicationApplicationSourceConfig <a name="AppintegrationsApplicationApplicationSourceConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appintegrations_application.AppintegrationsApplicationApplicationSourceConfig;

AppintegrationsApplicationApplicationSourceConfig.builder()
    .externalUrlConfig(AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig.property.externalUrlConfig">externalUrlConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig">AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_application#external_url_config AppintegrationsApplication#external_url_config}. |

---

##### `externalUrlConfig`<sup>Required</sup> <a name="externalUrlConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig.property.externalUrlConfig"></a>

```java
public AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig getExternalUrlConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig">AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_application#external_url_config AppintegrationsApplication#external_url_config}.

---

### AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig <a name="AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appintegrations_application.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig;

AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig.builder()
    .accessUrl(java.lang.String)
//  .approvedOrigins(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig.property.accessUrl">accessUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_application#access_url AppintegrationsApplication#access_url}. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig.property.approvedOrigins">approvedOrigins</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_application#approved_origins AppintegrationsApplication#approved_origins}. |

---

##### `accessUrl`<sup>Required</sup> <a name="accessUrl" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig.property.accessUrl"></a>

```java
public java.lang.String getAccessUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_application#access_url AppintegrationsApplication#access_url}.

---

##### `approvedOrigins`<sup>Optional</sup> <a name="approvedOrigins" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig.property.approvedOrigins"></a>

```java
public java.util.List<java.lang.String> getApprovedOrigins();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_application#approved_origins AppintegrationsApplication#approved_origins}.

---

### AppintegrationsApplicationConfig <a name="AppintegrationsApplicationConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appintegrations_application.AppintegrationsApplicationConfig;

AppintegrationsApplicationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationSourceConfig(AppintegrationsApplicationApplicationSourceConfig)
    .name(java.lang.String)
    .namespace(java.lang.String)
//  .applicationConfig(AppintegrationsApplicationApplicationConfig)
//  .applicationType(java.lang.String)
//  .description(java.lang.String)
//  .iframeConfig(AppintegrationsApplicationIframeConfig)
//  .initializationTimeout(java.lang.Number)
//  .isService(java.lang.Boolean|IResolvable)
//  .permissions(java.util.List<java.lang.String>)
//  .tags(IResolvable|java.util.List<AppintegrationsApplicationTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.applicationSourceConfig">applicationSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig">AppintegrationsApplicationApplicationSourceConfig</a></code> | Application source config. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the application. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The namespace of the application. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.applicationConfig">applicationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig">AppintegrationsApplicationApplicationConfig</a></code> | The application configuration. Cannot be used when IsService is true. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.applicationType">applicationType</a></code> | <code>java.lang.String</code> | The type of application. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.description">description</a></code> | <code>java.lang.String</code> | The application description. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.iframeConfig">iframeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig">AppintegrationsApplicationIframeConfig</a></code> | The iframe configuration. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.initializationTimeout">initializationTimeout</a></code> | <code>java.lang.Number</code> | The initialization timeout in milliseconds. Required when IsService is true. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.isService">isService</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates if the application is a service. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.permissions">permissions</a></code> | <code>java.util.List<java.lang.String></code> | The configuration of events or requests that the application has access to. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags">AppintegrationsApplicationTags</a>></code> | The tags (keys and values) associated with the application. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationSourceConfig`<sup>Required</sup> <a name="applicationSourceConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.applicationSourceConfig"></a>

```java
public AppintegrationsApplicationApplicationSourceConfig getApplicationSourceConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig">AppintegrationsApplicationApplicationSourceConfig</a>

Application source config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_application#application_source_config AppintegrationsApplication#application_source_config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_application#name AppintegrationsApplication#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The namespace of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_application#namespace AppintegrationsApplication#namespace}

---

##### `applicationConfig`<sup>Optional</sup> <a name="applicationConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.applicationConfig"></a>

```java
public AppintegrationsApplicationApplicationConfig getApplicationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig">AppintegrationsApplicationApplicationConfig</a>

The application configuration. Cannot be used when IsService is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_application#application_config AppintegrationsApplication#application_config}

---

##### `applicationType`<sup>Optional</sup> <a name="applicationType" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.applicationType"></a>

```java
public java.lang.String getApplicationType();
```

- *Type:* java.lang.String

The type of application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_application#application_type AppintegrationsApplication#application_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The application description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_application#description AppintegrationsApplication#description}

---

##### `iframeConfig`<sup>Optional</sup> <a name="iframeConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.iframeConfig"></a>

```java
public AppintegrationsApplicationIframeConfig getIframeConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig">AppintegrationsApplicationIframeConfig</a>

The iframe configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_application#iframe_config AppintegrationsApplication#iframe_config}

---

##### `initializationTimeout`<sup>Optional</sup> <a name="initializationTimeout" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.initializationTimeout"></a>

```java
public java.lang.Number getInitializationTimeout();
```

- *Type:* java.lang.Number

The initialization timeout in milliseconds. Required when IsService is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_application#initialization_timeout AppintegrationsApplication#initialization_timeout}

---

##### `isService`<sup>Optional</sup> <a name="isService" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.isService"></a>

```java
public java.lang.Boolean|IResolvable getIsService();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates if the application is a service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_application#is_service AppintegrationsApplication#is_service}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.permissions"></a>

```java
public java.util.List<java.lang.String> getPermissions();
```

- *Type:* java.util.List<java.lang.String>

The configuration of events or requests that the application has access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_application#permissions AppintegrationsApplication#permissions}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.tags"></a>

```java
public IResolvable|java.util.List<AppintegrationsApplicationTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags">AppintegrationsApplicationTags</a>>

The tags (keys and values) associated with the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_application#tags AppintegrationsApplication#tags}

---

### AppintegrationsApplicationIframeConfig <a name="AppintegrationsApplicationIframeConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appintegrations_application.AppintegrationsApplicationIframeConfig;

AppintegrationsApplicationIframeConfig.builder()
//  .allow(java.util.List<java.lang.String>)
//  .sandbox(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig.property.allow">allow</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_application#allow AppintegrationsApplication#allow}. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig.property.sandbox">sandbox</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_application#sandbox AppintegrationsApplication#sandbox}. |

---

##### `allow`<sup>Optional</sup> <a name="allow" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig.property.allow"></a>

```java
public java.util.List<java.lang.String> getAllow();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_application#allow AppintegrationsApplication#allow}.

---

##### `sandbox`<sup>Optional</sup> <a name="sandbox" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig.property.sandbox"></a>

```java
public java.util.List<java.lang.String> getSandbox();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_application#sandbox AppintegrationsApplication#sandbox}.

---

### AppintegrationsApplicationTags <a name="AppintegrationsApplicationTags" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.appintegrations_application.AppintegrationsApplicationTags;

AppintegrationsApplicationTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags.property.key">key</a></code> | <code>java.lang.String</code> | A key to identify the tag. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags.property.value">value</a></code> | <code>java.lang.String</code> | Corresponding tag value for the key. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

A key to identify the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_application#key AppintegrationsApplication#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Corresponding tag value for the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appintegrations_application#value AppintegrationsApplication#value}

---

## Classes <a name="Classes" id="Classes"></a>

### AppintegrationsApplicationApplicationConfigContactHandlingOutputReference <a name="AppintegrationsApplicationApplicationConfigContactHandlingOutputReference" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appintegrations_application.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference;

new AppintegrationsApplicationApplicationConfigContactHandlingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.resetScope">resetScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScope` <a name="resetScope" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.resetScope"></a>

```java
public void resetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling">AppintegrationsApplicationApplicationConfigContactHandling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.internalValue"></a>

```java
public IResolvable|AppintegrationsApplicationApplicationConfigContactHandling getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling">AppintegrationsApplicationApplicationConfigContactHandling</a>

---


### AppintegrationsApplicationApplicationConfigOutputReference <a name="AppintegrationsApplicationApplicationConfigOutputReference" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appintegrations_application.AppintegrationsApplicationApplicationConfigOutputReference;

new AppintegrationsApplicationApplicationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.putContactHandling">putContactHandling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.resetContactHandling">resetContactHandling</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContactHandling` <a name="putContactHandling" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.putContactHandling"></a>

```java
public void putContactHandling(AppintegrationsApplicationApplicationConfigContactHandling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.putContactHandling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling">AppintegrationsApplicationApplicationConfigContactHandling</a>

---

##### `resetContactHandling` <a name="resetContactHandling" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.resetContactHandling"></a>

```java
public void resetContactHandling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.contactHandling">contactHandling</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference">AppintegrationsApplicationApplicationConfigContactHandlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.contactHandlingInput">contactHandlingInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling">AppintegrationsApplicationApplicationConfigContactHandling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig">AppintegrationsApplicationApplicationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contactHandling`<sup>Required</sup> <a name="contactHandling" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.contactHandling"></a>

```java
public AppintegrationsApplicationApplicationConfigContactHandlingOutputReference getContactHandling();
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference">AppintegrationsApplicationApplicationConfigContactHandlingOutputReference</a>

---

##### `contactHandlingInput`<sup>Optional</sup> <a name="contactHandlingInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.contactHandlingInput"></a>

```java
public IResolvable|AppintegrationsApplicationApplicationConfigContactHandling getContactHandlingInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling">AppintegrationsApplicationApplicationConfigContactHandling</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AppintegrationsApplicationApplicationConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig">AppintegrationsApplicationApplicationConfig</a>

---


### AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference <a name="AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appintegrations_application.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference;

new AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.resetApprovedOrigins">resetApprovedOrigins</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApprovedOrigins` <a name="resetApprovedOrigins" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.resetApprovedOrigins"></a>

```java
public void resetApprovedOrigins()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.accessUrlInput">accessUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.approvedOriginsInput">approvedOriginsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.accessUrl">accessUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.approvedOrigins">approvedOrigins</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig">AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessUrlInput`<sup>Optional</sup> <a name="accessUrlInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.accessUrlInput"></a>

```java
public java.lang.String getAccessUrlInput();
```

- *Type:* java.lang.String

---

##### `approvedOriginsInput`<sup>Optional</sup> <a name="approvedOriginsInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.approvedOriginsInput"></a>

```java
public java.util.List<java.lang.String> getApprovedOriginsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accessUrl`<sup>Required</sup> <a name="accessUrl" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.accessUrl"></a>

```java
public java.lang.String getAccessUrl();
```

- *Type:* java.lang.String

---

##### `approvedOrigins`<sup>Required</sup> <a name="approvedOrigins" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.approvedOrigins"></a>

```java
public java.util.List<java.lang.String> getApprovedOrigins();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig">AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig</a>

---


### AppintegrationsApplicationApplicationSourceConfigOutputReference <a name="AppintegrationsApplicationApplicationSourceConfigOutputReference" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appintegrations_application.AppintegrationsApplicationApplicationSourceConfigOutputReference;

new AppintegrationsApplicationApplicationSourceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.putExternalUrlConfig">putExternalUrlConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExternalUrlConfig` <a name="putExternalUrlConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.putExternalUrlConfig"></a>

```java
public void putExternalUrlConfig(AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.putExternalUrlConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig">AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.externalUrlConfig">externalUrlConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference">AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.externalUrlConfigInput">externalUrlConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig">AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig">AppintegrationsApplicationApplicationSourceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `externalUrlConfig`<sup>Required</sup> <a name="externalUrlConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.externalUrlConfig"></a>

```java
public AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference getExternalUrlConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference">AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference</a>

---

##### `externalUrlConfigInput`<sup>Optional</sup> <a name="externalUrlConfigInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.externalUrlConfigInput"></a>

```java
public IResolvable|AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig getExternalUrlConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig">AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AppintegrationsApplicationApplicationSourceConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig">AppintegrationsApplicationApplicationSourceConfig</a>

---


### AppintegrationsApplicationIframeConfigOutputReference <a name="AppintegrationsApplicationIframeConfigOutputReference" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appintegrations_application.AppintegrationsApplicationIframeConfigOutputReference;

new AppintegrationsApplicationIframeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.resetAllow">resetAllow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.resetSandbox">resetSandbox</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllow` <a name="resetAllow" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.resetAllow"></a>

```java
public void resetAllow()
```

##### `resetSandbox` <a name="resetSandbox" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.resetSandbox"></a>

```java
public void resetSandbox()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.allowInput">allowInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.sandboxInput">sandboxInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.allow">allow</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.sandbox">sandbox</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig">AppintegrationsApplicationIframeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowInput`<sup>Optional</sup> <a name="allowInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.allowInput"></a>

```java
public java.util.List<java.lang.String> getAllowInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sandboxInput`<sup>Optional</sup> <a name="sandboxInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.sandboxInput"></a>

```java
public java.util.List<java.lang.String> getSandboxInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allow`<sup>Required</sup> <a name="allow" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.allow"></a>

```java
public java.util.List<java.lang.String> getAllow();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sandbox`<sup>Required</sup> <a name="sandbox" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.sandbox"></a>

```java
public java.util.List<java.lang.String> getSandbox();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|AppintegrationsApplicationIframeConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig">AppintegrationsApplicationIframeConfig</a>

---


### AppintegrationsApplicationTagsList <a name="AppintegrationsApplicationTagsList" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.appintegrations_application.AppintegrationsApplicationTagsList;

new AppintegrationsApplicationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.get"></a>

```java
public AppintegrationsApplicationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags">AppintegrationsApplicationTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AppintegrationsApplicationTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags">AppintegrationsApplicationTags</a>>

---


### AppintegrationsApplicationTagsOutputReference <a name="AppintegrationsApplicationTagsOutputReference" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appintegrations_application.AppintegrationsApplicationTagsOutputReference;

new AppintegrationsApplicationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags">AppintegrationsApplicationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|AppintegrationsApplicationTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags">AppintegrationsApplicationTags</a>

---



