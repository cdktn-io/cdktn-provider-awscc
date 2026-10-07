# `applicationsignalsInstrumentationConfig` Submodule <a name="`applicationsignalsInstrumentationConfig` Submodule" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationsignalsInstrumentationConfig <a name="ApplicationsignalsInstrumentationConfig" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config awscc_applicationsignals_instrumentation_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.applicationsignals_instrumentation_config.ApplicationsignalsInstrumentationConfig;

ApplicationsignalsInstrumentationConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .captureConfiguration(ApplicationsignalsInstrumentationConfigCaptureConfiguration)
    .environment(java.lang.String)
    .instrumentationType(java.lang.String)
    .location(ApplicationsignalsInstrumentationConfigLocation)
    .service(java.lang.String)
    .signalType(java.lang.String)
//  .attributeFilters(IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>)
//  .description(java.lang.String)
//  .expiresAt(java.lang.String)
//  .tags(IResolvable|java.util.List<ApplicationsignalsInstrumentationConfigTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.captureConfiguration">captureConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration">ApplicationsignalsInstrumentationConfigCaptureConfiguration</a></code> | Specifies what to capture when the instrumentation point is hit. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.environment">environment</a></code> | <code>java.lang.String</code> | The environment that the service is running in. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.instrumentationType">instrumentationType</a></code> | <code>java.lang.String</code> | Type of instrumentation: BREAKPOINT (temporary, expires after 24 hours) or PROBE (permanent, persists until deleted). |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation">ApplicationsignalsInstrumentationConfigLocation</a></code> | The location where instrumentation should be applied. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.service">service</a></code> | <code>java.lang.String</code> | The name of the service to instrument. This should match the service.name resource attribute reported by the application. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.signalType">signalType</a></code> | <code>java.lang.String</code> | The telemetry signal type to emit for this instrumentation. The supported value is SNAPSHOT. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.attributeFilters">attributeFilters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | Client-side filters that target specific instances. Each object is AND-matched on keys, multiple objects are OR-matched. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional short description that explains the purpose of this instrumentation. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.expiresAt">expiresAt</a></code> | <code>java.lang.String</code> | The timestamp after which this configuration is no longer served. For BREAKPOINT only; defaults to 24 hours. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags">ApplicationsignalsInstrumentationConfigTags</a>></code> | An optional list of key-value pairs to associate with the instrumentation configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `captureConfiguration`<sup>Required</sup> <a name="captureConfiguration" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.captureConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration">ApplicationsignalsInstrumentationConfigCaptureConfiguration</a>

Specifies what to capture when the instrumentation point is hit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#capture_configuration ApplicationsignalsInstrumentationConfig#capture_configuration}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.environment"></a>

- *Type:* java.lang.String

The environment that the service is running in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#environment ApplicationsignalsInstrumentationConfig#environment}

---

##### `instrumentationType`<sup>Required</sup> <a name="instrumentationType" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.instrumentationType"></a>

- *Type:* java.lang.String

Type of instrumentation: BREAKPOINT (temporary, expires after 24 hours) or PROBE (permanent, persists until deleted).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#instrumentation_type ApplicationsignalsInstrumentationConfig#instrumentation_type}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.location"></a>

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation">ApplicationsignalsInstrumentationConfigLocation</a>

The location where instrumentation should be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#location ApplicationsignalsInstrumentationConfig#location}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.service"></a>

- *Type:* java.lang.String

The name of the service to instrument. This should match the service.name resource attribute reported by the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#service ApplicationsignalsInstrumentationConfig#service}

---

##### `signalType`<sup>Required</sup> <a name="signalType" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.signalType"></a>

- *Type:* java.lang.String

The telemetry signal type to emit for this instrumentation. The supported value is SNAPSHOT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#signal_type ApplicationsignalsInstrumentationConfig#signal_type}

---

##### `attributeFilters`<sup>Optional</sup> <a name="attributeFilters" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.attributeFilters"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>

Client-side filters that target specific instances. Each object is AND-matched on keys, multiple objects are OR-matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#attribute_filters ApplicationsignalsInstrumentationConfig#attribute_filters}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional short description that explains the purpose of this instrumentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#description ApplicationsignalsInstrumentationConfig#description}

---

##### `expiresAt`<sup>Optional</sup> <a name="expiresAt" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.expiresAt"></a>

- *Type:* java.lang.String

The timestamp after which this configuration is no longer served. For BREAKPOINT only; defaults to 24 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#expires_at ApplicationsignalsInstrumentationConfig#expires_at}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags">ApplicationsignalsInstrumentationConfigTags</a>>

An optional list of key-value pairs to associate with the instrumentation configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#tags ApplicationsignalsInstrumentationConfig#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putCaptureConfiguration">putCaptureConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putLocation">putLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetAttributeFilters">resetAttributeFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetExpiresAt">resetExpiresAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCaptureConfiguration` <a name="putCaptureConfiguration" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putCaptureConfiguration"></a>

```java
public void putCaptureConfiguration(ApplicationsignalsInstrumentationConfigCaptureConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putCaptureConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration">ApplicationsignalsInstrumentationConfigCaptureConfiguration</a>

---

##### `putLocation` <a name="putLocation" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putLocation"></a>

```java
public void putLocation(ApplicationsignalsInstrumentationConfigLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation">ApplicationsignalsInstrumentationConfigLocation</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ApplicationsignalsInstrumentationConfigTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags">ApplicationsignalsInstrumentationConfigTags</a>>

---

##### `resetAttributeFilters` <a name="resetAttributeFilters" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetAttributeFilters"></a>

```java
public void resetAttributeFilters()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetExpiresAt` <a name="resetExpiresAt" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetExpiresAt"></a>

```java
public void resetExpiresAt()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApplicationsignalsInstrumentationConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isConstruct"></a>

```java
import io.cdktn.providers.awscc.applicationsignals_instrumentation_config.ApplicationsignalsInstrumentationConfig;

ApplicationsignalsInstrumentationConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.applicationsignals_instrumentation_config.ApplicationsignalsInstrumentationConfig;

ApplicationsignalsInstrumentationConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.applicationsignals_instrumentation_config.ApplicationsignalsInstrumentationConfig;

ApplicationsignalsInstrumentationConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.applicationsignals_instrumentation_config.ApplicationsignalsInstrumentationConfig;

ApplicationsignalsInstrumentationConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApplicationsignalsInstrumentationConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ApplicationsignalsInstrumentationConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApplicationsignalsInstrumentationConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApplicationsignalsInstrumentationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ApplicationsignalsInstrumentationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.captureConfiguration">captureConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference">ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference">ApplicationsignalsInstrumentationConfigLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.locationHash">locationHash</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList">ApplicationsignalsInstrumentationConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.attributeFiltersInput">attributeFiltersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.captureConfigurationInput">captureConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration">ApplicationsignalsInstrumentationConfigCaptureConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.environmentInput">environmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.expiresAtInput">expiresAtInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.instrumentationTypeInput">instrumentationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.locationInput">locationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation">ApplicationsignalsInstrumentationConfigLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.signalTypeInput">signalTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags">ApplicationsignalsInstrumentationConfigTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.attributeFilters">attributeFilters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.expiresAt">expiresAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.instrumentationType">instrumentationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.signalType">signalType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `captureConfiguration`<sup>Required</sup> <a name="captureConfiguration" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.captureConfiguration"></a>

```java
public ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference getCaptureConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference">ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.location"></a>

```java
public ApplicationsignalsInstrumentationConfigLocationOutputReference getLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference">ApplicationsignalsInstrumentationConfigLocationOutputReference</a>

---

##### `locationHash`<sup>Required</sup> <a name="locationHash" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.locationHash"></a>

```java
public java.lang.String getLocationHash();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.tags"></a>

```java
public ApplicationsignalsInstrumentationConfigTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList">ApplicationsignalsInstrumentationConfigTagsList</a>

---

##### `attributeFiltersInput`<sup>Optional</sup> <a name="attributeFiltersInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.attributeFiltersInput"></a>

```java
public IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>> getAttributeFiltersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>

---

##### `captureConfigurationInput`<sup>Optional</sup> <a name="captureConfigurationInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.captureConfigurationInput"></a>

```java
public IResolvable|ApplicationsignalsInstrumentationConfigCaptureConfiguration getCaptureConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration">ApplicationsignalsInstrumentationConfigCaptureConfiguration</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.environmentInput"></a>

```java
public java.lang.String getEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `expiresAtInput`<sup>Optional</sup> <a name="expiresAtInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.expiresAtInput"></a>

```java
public java.lang.String getExpiresAtInput();
```

- *Type:* java.lang.String

---

##### `instrumentationTypeInput`<sup>Optional</sup> <a name="instrumentationTypeInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.instrumentationTypeInput"></a>

```java
public java.lang.String getInstrumentationTypeInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.locationInput"></a>

```java
public IResolvable|ApplicationsignalsInstrumentationConfigLocation getLocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation">ApplicationsignalsInstrumentationConfigLocation</a>

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `signalTypeInput`<sup>Optional</sup> <a name="signalTypeInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.signalTypeInput"></a>

```java
public java.lang.String getSignalTypeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ApplicationsignalsInstrumentationConfigTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags">ApplicationsignalsInstrumentationConfigTags</a>>

---

##### `attributeFilters`<sup>Required</sup> <a name="attributeFilters" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.attributeFilters"></a>

```java
public IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>> getAttributeFilters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.expiresAt"></a>

```java
public java.lang.String getExpiresAt();
```

- *Type:* java.lang.String

---

##### `instrumentationType`<sup>Required</sup> <a name="instrumentationType" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.instrumentationType"></a>

```java
public java.lang.String getInstrumentationType();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `signalType`<sup>Required</sup> <a name="signalType" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.signalType"></a>

```java
public java.lang.String getSignalType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationsignalsInstrumentationConfigCaptureConfiguration <a name="ApplicationsignalsInstrumentationConfigCaptureConfiguration" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.applicationsignals_instrumentation_config.ApplicationsignalsInstrumentationConfigCaptureConfiguration;

ApplicationsignalsInstrumentationConfigCaptureConfiguration.builder()
    .codeCapture(ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration.property.codeCapture">codeCapture</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture</a></code> | Defines what data to capture for code-level instrumentation. |

---

##### `codeCapture`<sup>Required</sup> <a name="codeCapture" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration.property.codeCapture"></a>

```java
public ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture getCodeCapture();
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture</a>

Defines what data to capture for code-level instrumentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#code_capture ApplicationsignalsInstrumentationConfig#code_capture}

---

### ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture <a name="ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.Initializer"></a>

```java
import io.cdktn.providers.awscc.applicationsignals_instrumentation_config.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture;

ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.builder()
    .captureLimits(ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits)
//  .captureArguments(java.util.List<java.lang.String>)
//  .captureLocals(java.util.List<java.lang.String>)
//  .captureReturn(java.lang.Boolean|IResolvable)
//  .captureStackTrace(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureLimits">captureLimits</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits</a></code> | Safety limits that bound what is captured. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureArguments">captureArguments</a></code> | <code>java.util.List<java.lang.String></code> | The function arguments to capture. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureLocals">captureLocals</a></code> | <code>java.util.List<java.lang.String></code> | The local variables to capture by name. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureReturn">captureReturn</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to capture the return value. Defaults to false. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureStackTrace">captureStackTrace</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to capture a stack trace. Defaults to true. |

---

##### `captureLimits`<sup>Required</sup> <a name="captureLimits" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureLimits"></a>

```java
public ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits getCaptureLimits();
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits</a>

Safety limits that bound what is captured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#capture_limits ApplicationsignalsInstrumentationConfig#capture_limits}

---

##### `captureArguments`<sup>Optional</sup> <a name="captureArguments" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureArguments"></a>

```java
public java.util.List<java.lang.String> getCaptureArguments();
```

- *Type:* java.util.List<java.lang.String>

The function arguments to capture.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#capture_arguments ApplicationsignalsInstrumentationConfig#capture_arguments}

---

##### `captureLocals`<sup>Optional</sup> <a name="captureLocals" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureLocals"></a>

```java
public java.util.List<java.lang.String> getCaptureLocals();
```

- *Type:* java.util.List<java.lang.String>

The local variables to capture by name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#capture_locals ApplicationsignalsInstrumentationConfig#capture_locals}

---

##### `captureReturn`<sup>Optional</sup> <a name="captureReturn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureReturn"></a>

```java
public java.lang.Boolean|IResolvable getCaptureReturn();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to capture the return value. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#capture_return ApplicationsignalsInstrumentationConfig#capture_return}

---

##### `captureStackTrace`<sup>Optional</sup> <a name="captureStackTrace" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureStackTrace"></a>

```java
public java.lang.Boolean|IResolvable getCaptureStackTrace();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to capture a stack trace. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#capture_stack_trace ApplicationsignalsInstrumentationConfig#capture_stack_trace}

---

### ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits <a name="ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.Initializer"></a>

```java
import io.cdktn.providers.awscc.applicationsignals_instrumentation_config.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits;

ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.builder()
//  .maxCollectionDepth(java.lang.Number)
//  .maxCollectionWidth(java.lang.Number)
//  .maxFieldsPerObject(java.lang.Number)
//  .maxHits(java.lang.Number)
//  .maxObjectDepth(java.lang.Number)
//  .maxStackFrames(java.lang.Number)
//  .maxStackTraceSize(java.lang.Number)
//  .maxStringLength(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxCollectionDepth">maxCollectionDepth</a></code> | <code>java.lang.Number</code> | Maximum nesting depth to traverse inside collections. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxCollectionWidth">maxCollectionWidth</a></code> | <code>java.lang.Number</code> | Maximum number of items to capture from any collection. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxFieldsPerObject">maxFieldsPerObject</a></code> | <code>java.lang.Number</code> | Maximum number of fields to capture for any object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxHits">maxHits</a></code> | <code>java.lang.Number</code> | Maximum number of times the instrumentation point can be hit before disabled. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxObjectDepth">maxObjectDepth</a></code> | <code>java.lang.Number</code> | Maximum depth for nested object traversal. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxStackFrames">maxStackFrames</a></code> | <code>java.lang.Number</code> | Maximum number of stack frames to capture. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxStackTraceSize">maxStackTraceSize</a></code> | <code>java.lang.Number</code> | Maximum total size in bytes of a captured stack trace. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxStringLength">maxStringLength</a></code> | <code>java.lang.Number</code> | Maximum length of captured string values in characters. |

---

##### `maxCollectionDepth`<sup>Optional</sup> <a name="maxCollectionDepth" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxCollectionDepth"></a>

```java
public java.lang.Number getMaxCollectionDepth();
```

- *Type:* java.lang.Number

Maximum nesting depth to traverse inside collections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_collection_depth ApplicationsignalsInstrumentationConfig#max_collection_depth}

---

##### `maxCollectionWidth`<sup>Optional</sup> <a name="maxCollectionWidth" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxCollectionWidth"></a>

```java
public java.lang.Number getMaxCollectionWidth();
```

- *Type:* java.lang.Number

Maximum number of items to capture from any collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_collection_width ApplicationsignalsInstrumentationConfig#max_collection_width}

---

##### `maxFieldsPerObject`<sup>Optional</sup> <a name="maxFieldsPerObject" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxFieldsPerObject"></a>

```java
public java.lang.Number getMaxFieldsPerObject();
```

- *Type:* java.lang.Number

Maximum number of fields to capture for any object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_fields_per_object ApplicationsignalsInstrumentationConfig#max_fields_per_object}

---

##### `maxHits`<sup>Optional</sup> <a name="maxHits" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxHits"></a>

```java
public java.lang.Number getMaxHits();
```

- *Type:* java.lang.Number

Maximum number of times the instrumentation point can be hit before disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_hits ApplicationsignalsInstrumentationConfig#max_hits}

---

##### `maxObjectDepth`<sup>Optional</sup> <a name="maxObjectDepth" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxObjectDepth"></a>

```java
public java.lang.Number getMaxObjectDepth();
```

- *Type:* java.lang.Number

Maximum depth for nested object traversal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_object_depth ApplicationsignalsInstrumentationConfig#max_object_depth}

---

##### `maxStackFrames`<sup>Optional</sup> <a name="maxStackFrames" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxStackFrames"></a>

```java
public java.lang.Number getMaxStackFrames();
```

- *Type:* java.lang.Number

Maximum number of stack frames to capture.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_stack_frames ApplicationsignalsInstrumentationConfig#max_stack_frames}

---

##### `maxStackTraceSize`<sup>Optional</sup> <a name="maxStackTraceSize" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxStackTraceSize"></a>

```java
public java.lang.Number getMaxStackTraceSize();
```

- *Type:* java.lang.Number

Maximum total size in bytes of a captured stack trace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_stack_trace_size ApplicationsignalsInstrumentationConfig#max_stack_trace_size}

---

##### `maxStringLength`<sup>Optional</sup> <a name="maxStringLength" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxStringLength"></a>

```java
public java.lang.Number getMaxStringLength();
```

- *Type:* java.lang.Number

Maximum length of captured string values in characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_string_length ApplicationsignalsInstrumentationConfig#max_string_length}

---

### ApplicationsignalsInstrumentationConfigConfig <a name="ApplicationsignalsInstrumentationConfigConfig" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.applicationsignals_instrumentation_config.ApplicationsignalsInstrumentationConfigConfig;

ApplicationsignalsInstrumentationConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .captureConfiguration(ApplicationsignalsInstrumentationConfigCaptureConfiguration)
    .environment(java.lang.String)
    .instrumentationType(java.lang.String)
    .location(ApplicationsignalsInstrumentationConfigLocation)
    .service(java.lang.String)
    .signalType(java.lang.String)
//  .attributeFilters(IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>)
//  .description(java.lang.String)
//  .expiresAt(java.lang.String)
//  .tags(IResolvable|java.util.List<ApplicationsignalsInstrumentationConfigTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.captureConfiguration">captureConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration">ApplicationsignalsInstrumentationConfigCaptureConfiguration</a></code> | Specifies what to capture when the instrumentation point is hit. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.environment">environment</a></code> | <code>java.lang.String</code> | The environment that the service is running in. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.instrumentationType">instrumentationType</a></code> | <code>java.lang.String</code> | Type of instrumentation: BREAKPOINT (temporary, expires after 24 hours) or PROBE (permanent, persists until deleted). |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation">ApplicationsignalsInstrumentationConfigLocation</a></code> | The location where instrumentation should be applied. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.service">service</a></code> | <code>java.lang.String</code> | The name of the service to instrument. This should match the service.name resource attribute reported by the application. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.signalType">signalType</a></code> | <code>java.lang.String</code> | The telemetry signal type to emit for this instrumentation. The supported value is SNAPSHOT. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.attributeFilters">attributeFilters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | Client-side filters that target specific instances. Each object is AND-matched on keys, multiple objects are OR-matched. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional short description that explains the purpose of this instrumentation. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.expiresAt">expiresAt</a></code> | <code>java.lang.String</code> | The timestamp after which this configuration is no longer served. For BREAKPOINT only; defaults to 24 hours. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags">ApplicationsignalsInstrumentationConfigTags</a>></code> | An optional list of key-value pairs to associate with the instrumentation configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `captureConfiguration`<sup>Required</sup> <a name="captureConfiguration" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.captureConfiguration"></a>

```java
public ApplicationsignalsInstrumentationConfigCaptureConfiguration getCaptureConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration">ApplicationsignalsInstrumentationConfigCaptureConfiguration</a>

Specifies what to capture when the instrumentation point is hit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#capture_configuration ApplicationsignalsInstrumentationConfig#capture_configuration}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

The environment that the service is running in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#environment ApplicationsignalsInstrumentationConfig#environment}

---

##### `instrumentationType`<sup>Required</sup> <a name="instrumentationType" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.instrumentationType"></a>

```java
public java.lang.String getInstrumentationType();
```

- *Type:* java.lang.String

Type of instrumentation: BREAKPOINT (temporary, expires after 24 hours) or PROBE (permanent, persists until deleted).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#instrumentation_type ApplicationsignalsInstrumentationConfig#instrumentation_type}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.location"></a>

```java
public ApplicationsignalsInstrumentationConfigLocation getLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation">ApplicationsignalsInstrumentationConfigLocation</a>

The location where instrumentation should be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#location ApplicationsignalsInstrumentationConfig#location}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

The name of the service to instrument. This should match the service.name resource attribute reported by the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#service ApplicationsignalsInstrumentationConfig#service}

---

##### `signalType`<sup>Required</sup> <a name="signalType" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.signalType"></a>

```java
public java.lang.String getSignalType();
```

- *Type:* java.lang.String

The telemetry signal type to emit for this instrumentation. The supported value is SNAPSHOT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#signal_type ApplicationsignalsInstrumentationConfig#signal_type}

---

##### `attributeFilters`<sup>Optional</sup> <a name="attributeFilters" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.attributeFilters"></a>

```java
public IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>> getAttributeFilters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>

Client-side filters that target specific instances. Each object is AND-matched on keys, multiple objects are OR-matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#attribute_filters ApplicationsignalsInstrumentationConfig#attribute_filters}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional short description that explains the purpose of this instrumentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#description ApplicationsignalsInstrumentationConfig#description}

---

##### `expiresAt`<sup>Optional</sup> <a name="expiresAt" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.expiresAt"></a>

```java
public java.lang.String getExpiresAt();
```

- *Type:* java.lang.String

The timestamp after which this configuration is no longer served. For BREAKPOINT only; defaults to 24 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#expires_at ApplicationsignalsInstrumentationConfig#expires_at}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ApplicationsignalsInstrumentationConfigTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags">ApplicationsignalsInstrumentationConfigTags</a>>

An optional list of key-value pairs to associate with the instrumentation configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#tags ApplicationsignalsInstrumentationConfig#tags}

---

### ApplicationsignalsInstrumentationConfigLocation <a name="ApplicationsignalsInstrumentationConfigLocation" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation.Initializer"></a>

```java
import io.cdktn.providers.awscc.applicationsignals_instrumentation_config.ApplicationsignalsInstrumentationConfigLocation;

ApplicationsignalsInstrumentationConfigLocation.builder()
    .codeLocation(ApplicationsignalsInstrumentationConfigLocationCodeLocation)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation.property.codeLocation">codeLocation</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation">ApplicationsignalsInstrumentationConfigLocationCodeLocation</a></code> | Identifies a code location to instrument. |

---

##### `codeLocation`<sup>Required</sup> <a name="codeLocation" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation.property.codeLocation"></a>

```java
public ApplicationsignalsInstrumentationConfigLocationCodeLocation getCodeLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation">ApplicationsignalsInstrumentationConfigLocationCodeLocation</a>

Identifies a code location to instrument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#code_location ApplicationsignalsInstrumentationConfig#code_location}

---

### ApplicationsignalsInstrumentationConfigLocationCodeLocation <a name="ApplicationsignalsInstrumentationConfigLocationCodeLocation" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.Initializer"></a>

```java
import io.cdktn.providers.awscc.applicationsignals_instrumentation_config.ApplicationsignalsInstrumentationConfigLocationCodeLocation;

ApplicationsignalsInstrumentationConfigLocationCodeLocation.builder()
    .filePath(java.lang.String)
    .language(java.lang.String)
//  .className(java.lang.String)
//  .codeUnit(java.lang.String)
//  .lineNumber(java.lang.Number)
//  .methodName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.filePath">filePath</a></code> | <code>java.lang.String</code> | The source file path relative to the project or source root. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.language">language</a></code> | <code>java.lang.String</code> | The programming language for this instrumentation point. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.className">className</a></code> | <code>java.lang.String</code> | The class or type name that contains the method. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.codeUnit">codeUnit</a></code> | <code>java.lang.String</code> | The package, module, or namespace that contains the target code. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.lineNumber">lineNumber</a></code> | <code>java.lang.Number</code> | The line number to instrument. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.methodName">methodName</a></code> | <code>java.lang.String</code> | The method or function name to instrument. |

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.filePath"></a>

```java
public java.lang.String getFilePath();
```

- *Type:* java.lang.String

The source file path relative to the project or source root.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#file_path ApplicationsignalsInstrumentationConfig#file_path}

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.language"></a>

```java
public java.lang.String getLanguage();
```

- *Type:* java.lang.String

The programming language for this instrumentation point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#language ApplicationsignalsInstrumentationConfig#language}

---

##### `className`<sup>Optional</sup> <a name="className" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.className"></a>

```java
public java.lang.String getClassName();
```

- *Type:* java.lang.String

The class or type name that contains the method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#class_name ApplicationsignalsInstrumentationConfig#class_name}

---

##### `codeUnit`<sup>Optional</sup> <a name="codeUnit" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.codeUnit"></a>

```java
public java.lang.String getCodeUnit();
```

- *Type:* java.lang.String

The package, module, or namespace that contains the target code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#code_unit ApplicationsignalsInstrumentationConfig#code_unit}

---

##### `lineNumber`<sup>Optional</sup> <a name="lineNumber" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.lineNumber"></a>

```java
public java.lang.Number getLineNumber();
```

- *Type:* java.lang.Number

The line number to instrument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#line_number ApplicationsignalsInstrumentationConfig#line_number}

---

##### `methodName`<sup>Optional</sup> <a name="methodName" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.methodName"></a>

```java
public java.lang.String getMethodName();
```

- *Type:* java.lang.String

The method or function name to instrument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#method_name ApplicationsignalsInstrumentationConfig#method_name}

---

### ApplicationsignalsInstrumentationConfigTags <a name="ApplicationsignalsInstrumentationConfigTags" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.applicationsignals_instrumentation_config.ApplicationsignalsInstrumentationConfigTags;

ApplicationsignalsInstrumentationConfigTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags.property.key">key</a></code> | <code>java.lang.String</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags.property.value">value</a></code> | <code>java.lang.String</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#key ApplicationsignalsInstrumentationConfig#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#value ApplicationsignalsInstrumentationConfig#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference <a name="ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.applicationsignals_instrumentation_config.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference;

new ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxCollectionDepth">resetMaxCollectionDepth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxCollectionWidth">resetMaxCollectionWidth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxFieldsPerObject">resetMaxFieldsPerObject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxHits">resetMaxHits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxObjectDepth">resetMaxObjectDepth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxStackFrames">resetMaxStackFrames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxStackTraceSize">resetMaxStackTraceSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxStringLength">resetMaxStringLength</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxCollectionDepth` <a name="resetMaxCollectionDepth" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxCollectionDepth"></a>

```java
public void resetMaxCollectionDepth()
```

##### `resetMaxCollectionWidth` <a name="resetMaxCollectionWidth" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxCollectionWidth"></a>

```java
public void resetMaxCollectionWidth()
```

##### `resetMaxFieldsPerObject` <a name="resetMaxFieldsPerObject" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxFieldsPerObject"></a>

```java
public void resetMaxFieldsPerObject()
```

##### `resetMaxHits` <a name="resetMaxHits" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxHits"></a>

```java
public void resetMaxHits()
```

##### `resetMaxObjectDepth` <a name="resetMaxObjectDepth" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxObjectDepth"></a>

```java
public void resetMaxObjectDepth()
```

##### `resetMaxStackFrames` <a name="resetMaxStackFrames" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxStackFrames"></a>

```java
public void resetMaxStackFrames()
```

##### `resetMaxStackTraceSize` <a name="resetMaxStackTraceSize" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxStackTraceSize"></a>

```java
public void resetMaxStackTraceSize()
```

##### `resetMaxStringLength` <a name="resetMaxStringLength" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxStringLength"></a>

```java
public void resetMaxStringLength()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionDepthInput">maxCollectionDepthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionWidthInput">maxCollectionWidthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxFieldsPerObjectInput">maxFieldsPerObjectInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxHitsInput">maxHitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxObjectDepthInput">maxObjectDepthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackFramesInput">maxStackFramesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackTraceSizeInput">maxStackTraceSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStringLengthInput">maxStringLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionDepth">maxCollectionDepth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionWidth">maxCollectionWidth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxFieldsPerObject">maxFieldsPerObject</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxHits">maxHits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxObjectDepth">maxObjectDepth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackFrames">maxStackFrames</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackTraceSize">maxStackTraceSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStringLength">maxStringLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxCollectionDepthInput`<sup>Optional</sup> <a name="maxCollectionDepthInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionDepthInput"></a>

```java
public java.lang.Number getMaxCollectionDepthInput();
```

- *Type:* java.lang.Number

---

##### `maxCollectionWidthInput`<sup>Optional</sup> <a name="maxCollectionWidthInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionWidthInput"></a>

```java
public java.lang.Number getMaxCollectionWidthInput();
```

- *Type:* java.lang.Number

---

##### `maxFieldsPerObjectInput`<sup>Optional</sup> <a name="maxFieldsPerObjectInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxFieldsPerObjectInput"></a>

```java
public java.lang.Number getMaxFieldsPerObjectInput();
```

- *Type:* java.lang.Number

---

##### `maxHitsInput`<sup>Optional</sup> <a name="maxHitsInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxHitsInput"></a>

```java
public java.lang.Number getMaxHitsInput();
```

- *Type:* java.lang.Number

---

##### `maxObjectDepthInput`<sup>Optional</sup> <a name="maxObjectDepthInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxObjectDepthInput"></a>

```java
public java.lang.Number getMaxObjectDepthInput();
```

- *Type:* java.lang.Number

---

##### `maxStackFramesInput`<sup>Optional</sup> <a name="maxStackFramesInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackFramesInput"></a>

```java
public java.lang.Number getMaxStackFramesInput();
```

- *Type:* java.lang.Number

---

##### `maxStackTraceSizeInput`<sup>Optional</sup> <a name="maxStackTraceSizeInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackTraceSizeInput"></a>

```java
public java.lang.Number getMaxStackTraceSizeInput();
```

- *Type:* java.lang.Number

---

##### `maxStringLengthInput`<sup>Optional</sup> <a name="maxStringLengthInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStringLengthInput"></a>

```java
public java.lang.Number getMaxStringLengthInput();
```

- *Type:* java.lang.Number

---

##### `maxCollectionDepth`<sup>Required</sup> <a name="maxCollectionDepth" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionDepth"></a>

```java
public java.lang.Number getMaxCollectionDepth();
```

- *Type:* java.lang.Number

---

##### `maxCollectionWidth`<sup>Required</sup> <a name="maxCollectionWidth" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionWidth"></a>

```java
public java.lang.Number getMaxCollectionWidth();
```

- *Type:* java.lang.Number

---

##### `maxFieldsPerObject`<sup>Required</sup> <a name="maxFieldsPerObject" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxFieldsPerObject"></a>

```java
public java.lang.Number getMaxFieldsPerObject();
```

- *Type:* java.lang.Number

---

##### `maxHits`<sup>Required</sup> <a name="maxHits" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxHits"></a>

```java
public java.lang.Number getMaxHits();
```

- *Type:* java.lang.Number

---

##### `maxObjectDepth`<sup>Required</sup> <a name="maxObjectDepth" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxObjectDepth"></a>

```java
public java.lang.Number getMaxObjectDepth();
```

- *Type:* java.lang.Number

---

##### `maxStackFrames`<sup>Required</sup> <a name="maxStackFrames" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackFrames"></a>

```java
public java.lang.Number getMaxStackFrames();
```

- *Type:* java.lang.Number

---

##### `maxStackTraceSize`<sup>Required</sup> <a name="maxStackTraceSize" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackTraceSize"></a>

```java
public java.lang.Number getMaxStackTraceSize();
```

- *Type:* java.lang.Number

---

##### `maxStringLength`<sup>Required</sup> <a name="maxStringLength" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStringLength"></a>

```java
public java.lang.Number getMaxStringLength();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.internalValue"></a>

```java
public IResolvable|ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits</a>

---


### ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference <a name="ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.applicationsignals_instrumentation_config.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference;

new ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.putCaptureLimits">putCaptureLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resetCaptureArguments">resetCaptureArguments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resetCaptureLocals">resetCaptureLocals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resetCaptureReturn">resetCaptureReturn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resetCaptureStackTrace">resetCaptureStackTrace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCaptureLimits` <a name="putCaptureLimits" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.putCaptureLimits"></a>

```java
public void putCaptureLimits(ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.putCaptureLimits.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits</a>

---

##### `resetCaptureArguments` <a name="resetCaptureArguments" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resetCaptureArguments"></a>

```java
public void resetCaptureArguments()
```

##### `resetCaptureLocals` <a name="resetCaptureLocals" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resetCaptureLocals"></a>

```java
public void resetCaptureLocals()
```

##### `resetCaptureReturn` <a name="resetCaptureReturn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resetCaptureReturn"></a>

```java
public void resetCaptureReturn()
```

##### `resetCaptureStackTrace` <a name="resetCaptureStackTrace" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resetCaptureStackTrace"></a>

```java
public void resetCaptureStackTrace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLimits">captureLimits</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureArgumentsInput">captureArgumentsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLimitsInput">captureLimitsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLocalsInput">captureLocalsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureReturnInput">captureReturnInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureStackTraceInput">captureStackTraceInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureArguments">captureArguments</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLocals">captureLocals</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureReturn">captureReturn</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureStackTrace">captureStackTrace</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `captureLimits`<sup>Required</sup> <a name="captureLimits" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLimits"></a>

```java
public ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference getCaptureLimits();
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference</a>

---

##### `captureArgumentsInput`<sup>Optional</sup> <a name="captureArgumentsInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureArgumentsInput"></a>

```java
public java.util.List<java.lang.String> getCaptureArgumentsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `captureLimitsInput`<sup>Optional</sup> <a name="captureLimitsInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLimitsInput"></a>

```java
public IResolvable|ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits getCaptureLimitsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits</a>

---

##### `captureLocalsInput`<sup>Optional</sup> <a name="captureLocalsInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLocalsInput"></a>

```java
public java.util.List<java.lang.String> getCaptureLocalsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `captureReturnInput`<sup>Optional</sup> <a name="captureReturnInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureReturnInput"></a>

```java
public java.lang.Boolean|IResolvable getCaptureReturnInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `captureStackTraceInput`<sup>Optional</sup> <a name="captureStackTraceInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureStackTraceInput"></a>

```java
public java.lang.Boolean|IResolvable getCaptureStackTraceInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `captureArguments`<sup>Required</sup> <a name="captureArguments" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureArguments"></a>

```java
public java.util.List<java.lang.String> getCaptureArguments();
```

- *Type:* java.util.List<java.lang.String>

---

##### `captureLocals`<sup>Required</sup> <a name="captureLocals" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLocals"></a>

```java
public java.util.List<java.lang.String> getCaptureLocals();
```

- *Type:* java.util.List<java.lang.String>

---

##### `captureReturn`<sup>Required</sup> <a name="captureReturn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureReturn"></a>

```java
public java.lang.Boolean|IResolvable getCaptureReturn();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `captureStackTrace`<sup>Required</sup> <a name="captureStackTrace" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureStackTrace"></a>

```java
public java.lang.Boolean|IResolvable getCaptureStackTrace();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.internalValue"></a>

```java
public IResolvable|ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture</a>

---


### ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference <a name="ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.applicationsignals_instrumentation_config.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference;

new ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.putCodeCapture">putCodeCapture</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCodeCapture` <a name="putCodeCapture" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.putCodeCapture"></a>

```java
public void putCodeCapture(ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.putCodeCapture.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.codeCapture">codeCapture</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.codeCaptureInput">codeCaptureInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration">ApplicationsignalsInstrumentationConfigCaptureConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `codeCapture`<sup>Required</sup> <a name="codeCapture" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.codeCapture"></a>

```java
public ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference getCodeCapture();
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference</a>

---

##### `codeCaptureInput`<sup>Optional</sup> <a name="codeCaptureInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.codeCaptureInput"></a>

```java
public IResolvable|ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture getCodeCaptureInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|ApplicationsignalsInstrumentationConfigCaptureConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration">ApplicationsignalsInstrumentationConfigCaptureConfiguration</a>

---


### ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference <a name="ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.applicationsignals_instrumentation_config.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference;

new ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resetClassName">resetClassName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resetCodeUnit">resetCodeUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resetLineNumber">resetLineNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resetMethodName">resetMethodName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClassName` <a name="resetClassName" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resetClassName"></a>

```java
public void resetClassName()
```

##### `resetCodeUnit` <a name="resetCodeUnit" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resetCodeUnit"></a>

```java
public void resetCodeUnit()
```

##### `resetLineNumber` <a name="resetLineNumber" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resetLineNumber"></a>

```java
public void resetLineNumber()
```

##### `resetMethodName` <a name="resetMethodName" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resetMethodName"></a>

```java
public void resetMethodName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.classNameInput">classNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.codeUnitInput">codeUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.filePathInput">filePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.languageInput">languageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.lineNumberInput">lineNumberInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.methodNameInput">methodNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.className">className</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.codeUnit">codeUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.filePath">filePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.language">language</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.lineNumber">lineNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.methodName">methodName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation">ApplicationsignalsInstrumentationConfigLocationCodeLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `classNameInput`<sup>Optional</sup> <a name="classNameInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.classNameInput"></a>

```java
public java.lang.String getClassNameInput();
```

- *Type:* java.lang.String

---

##### `codeUnitInput`<sup>Optional</sup> <a name="codeUnitInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.codeUnitInput"></a>

```java
public java.lang.String getCodeUnitInput();
```

- *Type:* java.lang.String

---

##### `filePathInput`<sup>Optional</sup> <a name="filePathInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.filePathInput"></a>

```java
public java.lang.String getFilePathInput();
```

- *Type:* java.lang.String

---

##### `languageInput`<sup>Optional</sup> <a name="languageInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.languageInput"></a>

```java
public java.lang.String getLanguageInput();
```

- *Type:* java.lang.String

---

##### `lineNumberInput`<sup>Optional</sup> <a name="lineNumberInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.lineNumberInput"></a>

```java
public java.lang.Number getLineNumberInput();
```

- *Type:* java.lang.Number

---

##### `methodNameInput`<sup>Optional</sup> <a name="methodNameInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.methodNameInput"></a>

```java
public java.lang.String getMethodNameInput();
```

- *Type:* java.lang.String

---

##### `className`<sup>Required</sup> <a name="className" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.className"></a>

```java
public java.lang.String getClassName();
```

- *Type:* java.lang.String

---

##### `codeUnit`<sup>Required</sup> <a name="codeUnit" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.codeUnit"></a>

```java
public java.lang.String getCodeUnit();
```

- *Type:* java.lang.String

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.filePath"></a>

```java
public java.lang.String getFilePath();
```

- *Type:* java.lang.String

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.language"></a>

```java
public java.lang.String getLanguage();
```

- *Type:* java.lang.String

---

##### `lineNumber`<sup>Required</sup> <a name="lineNumber" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.lineNumber"></a>

```java
public java.lang.Number getLineNumber();
```

- *Type:* java.lang.Number

---

##### `methodName`<sup>Required</sup> <a name="methodName" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.methodName"></a>

```java
public java.lang.String getMethodName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.internalValue"></a>

```java
public IResolvable|ApplicationsignalsInstrumentationConfigLocationCodeLocation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation">ApplicationsignalsInstrumentationConfigLocationCodeLocation</a>

---


### ApplicationsignalsInstrumentationConfigLocationOutputReference <a name="ApplicationsignalsInstrumentationConfigLocationOutputReference" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.applicationsignals_instrumentation_config.ApplicationsignalsInstrumentationConfigLocationOutputReference;

new ApplicationsignalsInstrumentationConfigLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.putCodeLocation">putCodeLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCodeLocation` <a name="putCodeLocation" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.putCodeLocation"></a>

```java
public void putCodeLocation(ApplicationsignalsInstrumentationConfigLocationCodeLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.putCodeLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation">ApplicationsignalsInstrumentationConfigLocationCodeLocation</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.codeLocation">codeLocation</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference">ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.codeLocationInput">codeLocationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation">ApplicationsignalsInstrumentationConfigLocationCodeLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation">ApplicationsignalsInstrumentationConfigLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `codeLocation`<sup>Required</sup> <a name="codeLocation" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.codeLocation"></a>

```java
public ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference getCodeLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference">ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference</a>

---

##### `codeLocationInput`<sup>Optional</sup> <a name="codeLocationInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.codeLocationInput"></a>

```java
public IResolvable|ApplicationsignalsInstrumentationConfigLocationCodeLocation getCodeLocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation">ApplicationsignalsInstrumentationConfigLocationCodeLocation</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.internalValue"></a>

```java
public IResolvable|ApplicationsignalsInstrumentationConfigLocation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation">ApplicationsignalsInstrumentationConfigLocation</a>

---


### ApplicationsignalsInstrumentationConfigTagsList <a name="ApplicationsignalsInstrumentationConfigTagsList" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.applicationsignals_instrumentation_config.ApplicationsignalsInstrumentationConfigTagsList;

new ApplicationsignalsInstrumentationConfigTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.get"></a>

```java
public ApplicationsignalsInstrumentationConfigTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags">ApplicationsignalsInstrumentationConfigTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ApplicationsignalsInstrumentationConfigTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags">ApplicationsignalsInstrumentationConfigTags</a>>

---


### ApplicationsignalsInstrumentationConfigTagsOutputReference <a name="ApplicationsignalsInstrumentationConfigTagsOutputReference" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.applicationsignals_instrumentation_config.ApplicationsignalsInstrumentationConfigTagsOutputReference;

new ApplicationsignalsInstrumentationConfigTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags">ApplicationsignalsInstrumentationConfigTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ApplicationsignalsInstrumentationConfigTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags">ApplicationsignalsInstrumentationConfigTags</a>

---



