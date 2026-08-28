# `apprunnerAutoScalingConfiguration` Submodule <a name="`apprunnerAutoScalingConfiguration` Submodule" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApprunnerAutoScalingConfiguration <a name="ApprunnerAutoScalingConfiguration" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_auto_scaling_configuration awscc_apprunner_auto_scaling_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_auto_scaling_configuration.ApprunnerAutoScalingConfiguration;

ApprunnerAutoScalingConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .autoScalingConfigurationName(java.lang.String)
//  .maxConcurrency(java.lang.Number)
//  .maxSize(java.lang.Number)
//  .minSize(java.lang.Number)
//  .tags(IResolvable|java.util.List<ApprunnerAutoScalingConfigurationTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.autoScalingConfigurationName">autoScalingConfigurationName</a></code> | <code>java.lang.String</code> | The customer-provided auto scaling configuration name. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.maxConcurrency">maxConcurrency</a></code> | <code>java.lang.Number</code> | The maximum number of concurrent requests that an instance processes. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.maxSize">maxSize</a></code> | <code>java.lang.Number</code> | The maximum number of instances that an App Runner service scales up to. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.minSize">minSize</a></code> | <code>java.lang.Number</code> | The minimum number of instances that App Runner provisions for a service. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags">ApprunnerAutoScalingConfigurationTags</a>></code> | A list of metadata items that you can associate with your auto scaling configuration resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `autoScalingConfigurationName`<sup>Optional</sup> <a name="autoScalingConfigurationName" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.autoScalingConfigurationName"></a>

- *Type:* java.lang.String

The customer-provided auto scaling configuration name.

When you use it for the first time in an AWS Region, App Runner creates revision number 1 of this name. When you use the same name in subsequent calls, App Runner creates incremental revisions of the configuration. The auto scaling configuration name can be used in multiple revisions of a configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_auto_scaling_configuration#auto_scaling_configuration_name ApprunnerAutoScalingConfiguration#auto_scaling_configuration_name}

---

##### `maxConcurrency`<sup>Optional</sup> <a name="maxConcurrency" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.maxConcurrency"></a>

- *Type:* java.lang.Number

The maximum number of concurrent requests that an instance processes.

If the number of concurrent requests exceeds this limit, App Runner scales the service up to use more instances to process the requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_auto_scaling_configuration#max_concurrency ApprunnerAutoScalingConfiguration#max_concurrency}

---

##### `maxSize`<sup>Optional</sup> <a name="maxSize" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.maxSize"></a>

- *Type:* java.lang.Number

The maximum number of instances that an App Runner service scales up to.

At most MaxSize instances actively serve traffic for your service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_auto_scaling_configuration#max_size ApprunnerAutoScalingConfiguration#max_size}

---

##### `minSize`<sup>Optional</sup> <a name="minSize" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.minSize"></a>

- *Type:* java.lang.Number

The minimum number of instances that App Runner provisions for a service.

The service always has at least MinSize provisioned instances. Some of them actively serve traffic. The rest of them (provisioned and inactive instances) are a cost-effective compute capacity reserve and are ready to be quickly activated. You pay for memory usage of all the provisioned instances. You pay for CPU usage of only the active subset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_auto_scaling_configuration#min_size ApprunnerAutoScalingConfiguration#min_size}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags">ApprunnerAutoScalingConfigurationTags</a>>

A list of metadata items that you can associate with your auto scaling configuration resource.

A tag is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_auto_scaling_configuration#tags ApprunnerAutoScalingConfiguration#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetAutoScalingConfigurationName">resetAutoScalingConfigurationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetMaxConcurrency">resetMaxConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetMaxSize">resetMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetMinSize">resetMinSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ApprunnerAutoScalingConfigurationTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags">ApprunnerAutoScalingConfigurationTags</a>>

---

##### `resetAutoScalingConfigurationName` <a name="resetAutoScalingConfigurationName" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetAutoScalingConfigurationName"></a>

```java
public void resetAutoScalingConfigurationName()
```

##### `resetMaxConcurrency` <a name="resetMaxConcurrency" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetMaxConcurrency"></a>

```java
public void resetMaxConcurrency()
```

##### `resetMaxSize` <a name="resetMaxSize" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetMaxSize"></a>

```java
public void resetMaxSize()
```

##### `resetMinSize` <a name="resetMinSize" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetMinSize"></a>

```java
public void resetMinSize()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApprunnerAutoScalingConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.isConstruct"></a>

```java
import io.cdktn.providers.awscc.apprunner_auto_scaling_configuration.ApprunnerAutoScalingConfiguration;

ApprunnerAutoScalingConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.apprunner_auto_scaling_configuration.ApprunnerAutoScalingConfiguration;

ApprunnerAutoScalingConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.apprunner_auto_scaling_configuration.ApprunnerAutoScalingConfiguration;

ApprunnerAutoScalingConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.apprunner_auto_scaling_configuration.ApprunnerAutoScalingConfiguration;

ApprunnerAutoScalingConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApprunnerAutoScalingConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ApprunnerAutoScalingConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApprunnerAutoScalingConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApprunnerAutoScalingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_auto_scaling_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ApprunnerAutoScalingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.autoScalingConfigurationArn">autoScalingConfigurationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.autoScalingConfigurationRevision">autoScalingConfigurationRevision</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.latest">latest</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList">ApprunnerAutoScalingConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.autoScalingConfigurationNameInput">autoScalingConfigurationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.maxConcurrencyInput">maxConcurrencyInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.maxSizeInput">maxSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.minSizeInput">minSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags">ApprunnerAutoScalingConfigurationTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.autoScalingConfigurationName">autoScalingConfigurationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.maxConcurrency">maxConcurrency</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.maxSize">maxSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.minSize">minSize</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `autoScalingConfigurationArn`<sup>Required</sup> <a name="autoScalingConfigurationArn" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.autoScalingConfigurationArn"></a>

```java
public java.lang.String getAutoScalingConfigurationArn();
```

- *Type:* java.lang.String

---

##### `autoScalingConfigurationRevision`<sup>Required</sup> <a name="autoScalingConfigurationRevision" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.autoScalingConfigurationRevision"></a>

```java
public java.lang.Number getAutoScalingConfigurationRevision();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `latest`<sup>Required</sup> <a name="latest" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.latest"></a>

```java
public IResolvable getLatest();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.tags"></a>

```java
public ApprunnerAutoScalingConfigurationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList">ApprunnerAutoScalingConfigurationTagsList</a>

---

##### `autoScalingConfigurationNameInput`<sup>Optional</sup> <a name="autoScalingConfigurationNameInput" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.autoScalingConfigurationNameInput"></a>

```java
public java.lang.String getAutoScalingConfigurationNameInput();
```

- *Type:* java.lang.String

---

##### `maxConcurrencyInput`<sup>Optional</sup> <a name="maxConcurrencyInput" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.maxConcurrencyInput"></a>

```java
public java.lang.Number getMaxConcurrencyInput();
```

- *Type:* java.lang.Number

---

##### `maxSizeInput`<sup>Optional</sup> <a name="maxSizeInput" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.maxSizeInput"></a>

```java
public java.lang.Number getMaxSizeInput();
```

- *Type:* java.lang.Number

---

##### `minSizeInput`<sup>Optional</sup> <a name="minSizeInput" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.minSizeInput"></a>

```java
public java.lang.Number getMinSizeInput();
```

- *Type:* java.lang.Number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ApprunnerAutoScalingConfigurationTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags">ApprunnerAutoScalingConfigurationTags</a>>

---

##### `autoScalingConfigurationName`<sup>Required</sup> <a name="autoScalingConfigurationName" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.autoScalingConfigurationName"></a>

```java
public java.lang.String getAutoScalingConfigurationName();
```

- *Type:* java.lang.String

---

##### `maxConcurrency`<sup>Required</sup> <a name="maxConcurrency" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.maxConcurrency"></a>

```java
public java.lang.Number getMaxConcurrency();
```

- *Type:* java.lang.Number

---

##### `maxSize`<sup>Required</sup> <a name="maxSize" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.maxSize"></a>

```java
public java.lang.Number getMaxSize();
```

- *Type:* java.lang.Number

---

##### `minSize`<sup>Required</sup> <a name="minSize" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.minSize"></a>

```java
public java.lang.Number getMinSize();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApprunnerAutoScalingConfigurationConfig <a name="ApprunnerAutoScalingConfigurationConfig" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_auto_scaling_configuration.ApprunnerAutoScalingConfigurationConfig;

ApprunnerAutoScalingConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .autoScalingConfigurationName(java.lang.String)
//  .maxConcurrency(java.lang.Number)
//  .maxSize(java.lang.Number)
//  .minSize(java.lang.Number)
//  .tags(IResolvable|java.util.List<ApprunnerAutoScalingConfigurationTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.autoScalingConfigurationName">autoScalingConfigurationName</a></code> | <code>java.lang.String</code> | The customer-provided auto scaling configuration name. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.maxConcurrency">maxConcurrency</a></code> | <code>java.lang.Number</code> | The maximum number of concurrent requests that an instance processes. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.maxSize">maxSize</a></code> | <code>java.lang.Number</code> | The maximum number of instances that an App Runner service scales up to. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.minSize">minSize</a></code> | <code>java.lang.Number</code> | The minimum number of instances that App Runner provisions for a service. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags">ApprunnerAutoScalingConfigurationTags</a>></code> | A list of metadata items that you can associate with your auto scaling configuration resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `autoScalingConfigurationName`<sup>Optional</sup> <a name="autoScalingConfigurationName" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.autoScalingConfigurationName"></a>

```java
public java.lang.String getAutoScalingConfigurationName();
```

- *Type:* java.lang.String

The customer-provided auto scaling configuration name.

When you use it for the first time in an AWS Region, App Runner creates revision number 1 of this name. When you use the same name in subsequent calls, App Runner creates incremental revisions of the configuration. The auto scaling configuration name can be used in multiple revisions of a configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_auto_scaling_configuration#auto_scaling_configuration_name ApprunnerAutoScalingConfiguration#auto_scaling_configuration_name}

---

##### `maxConcurrency`<sup>Optional</sup> <a name="maxConcurrency" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.maxConcurrency"></a>

```java
public java.lang.Number getMaxConcurrency();
```

- *Type:* java.lang.Number

The maximum number of concurrent requests that an instance processes.

If the number of concurrent requests exceeds this limit, App Runner scales the service up to use more instances to process the requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_auto_scaling_configuration#max_concurrency ApprunnerAutoScalingConfiguration#max_concurrency}

---

##### `maxSize`<sup>Optional</sup> <a name="maxSize" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.maxSize"></a>

```java
public java.lang.Number getMaxSize();
```

- *Type:* java.lang.Number

The maximum number of instances that an App Runner service scales up to.

At most MaxSize instances actively serve traffic for your service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_auto_scaling_configuration#max_size ApprunnerAutoScalingConfiguration#max_size}

---

##### `minSize`<sup>Optional</sup> <a name="minSize" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.minSize"></a>

```java
public java.lang.Number getMinSize();
```

- *Type:* java.lang.Number

The minimum number of instances that App Runner provisions for a service.

The service always has at least MinSize provisioned instances. Some of them actively serve traffic. The rest of them (provisioned and inactive instances) are a cost-effective compute capacity reserve and are ready to be quickly activated. You pay for memory usage of all the provisioned instances. You pay for CPU usage of only the active subset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_auto_scaling_configuration#min_size ApprunnerAutoScalingConfiguration#min_size}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ApprunnerAutoScalingConfigurationTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags">ApprunnerAutoScalingConfigurationTags</a>>

A list of metadata items that you can associate with your auto scaling configuration resource.

A tag is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_auto_scaling_configuration#tags ApprunnerAutoScalingConfiguration#tags}

---

### ApprunnerAutoScalingConfigurationTags <a name="ApprunnerAutoScalingConfigurationTags" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_auto_scaling_configuration.ApprunnerAutoScalingConfigurationTags;

ApprunnerAutoScalingConfigurationTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_auto_scaling_configuration#key ApprunnerAutoScalingConfiguration#key}. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_auto_scaling_configuration#value ApprunnerAutoScalingConfiguration#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_auto_scaling_configuration#key ApprunnerAutoScalingConfiguration#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_auto_scaling_configuration#value ApprunnerAutoScalingConfiguration#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApprunnerAutoScalingConfigurationTagsList <a name="ApprunnerAutoScalingConfigurationTagsList" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_auto_scaling_configuration.ApprunnerAutoScalingConfigurationTagsList;

new ApprunnerAutoScalingConfigurationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.get"></a>

```java
public ApprunnerAutoScalingConfigurationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags">ApprunnerAutoScalingConfigurationTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ApprunnerAutoScalingConfigurationTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags">ApprunnerAutoScalingConfigurationTags</a>>

---


### ApprunnerAutoScalingConfigurationTagsOutputReference <a name="ApprunnerAutoScalingConfigurationTagsOutputReference" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.apprunner_auto_scaling_configuration.ApprunnerAutoScalingConfigurationTagsOutputReference;

new ApprunnerAutoScalingConfigurationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags">ApprunnerAutoScalingConfigurationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ApprunnerAutoScalingConfigurationTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags">ApprunnerAutoScalingConfigurationTags</a>

---



