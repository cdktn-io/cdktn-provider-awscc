# `elasticbeanstalkApplication` Submodule <a name="`elasticbeanstalkApplication` Submodule" id="@cdktn/provider-awscc.elasticbeanstalkApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticbeanstalkApplication <a name="ElasticbeanstalkApplication" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_application awscc_elasticbeanstalk_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_application.ElasticbeanstalkApplication;

ElasticbeanstalkApplication.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .applicationName(java.lang.String)
//  .description(java.lang.String)
//  .resourceLifecycleConfig(ElasticbeanstalkApplicationResourceLifecycleConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.applicationName">applicationName</a></code> | <code>java.lang.String</code> | A name for the Elastic Beanstalk application. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Your description of the application. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.resourceLifecycleConfig">resourceLifecycleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfig">ElasticbeanstalkApplicationResourceLifecycleConfig</a></code> | Specifies an application resource lifecycle configuration to prevent your application from accumulating too many versions. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationName`<sup>Optional</sup> <a name="applicationName" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.applicationName"></a>

- *Type:* java.lang.String

A name for the Elastic Beanstalk application.

If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the application name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_application#application_name ElasticbeanstalkApplication#application_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Your description of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_application#description ElasticbeanstalkApplication#description}

---

##### `resourceLifecycleConfig`<sup>Optional</sup> <a name="resourceLifecycleConfig" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.Initializer.parameter.resourceLifecycleConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfig">ElasticbeanstalkApplicationResourceLifecycleConfig</a>

Specifies an application resource lifecycle configuration to prevent your application from accumulating too many versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_application#resource_lifecycle_config ElasticbeanstalkApplication#resource_lifecycle_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.putResourceLifecycleConfig">putResourceLifecycleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.resetApplicationName">resetApplicationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.resetResourceLifecycleConfig">resetResourceLifecycleConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putResourceLifecycleConfig` <a name="putResourceLifecycleConfig" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.putResourceLifecycleConfig"></a>

```java
public void putResourceLifecycleConfig(ElasticbeanstalkApplicationResourceLifecycleConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.putResourceLifecycleConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfig">ElasticbeanstalkApplicationResourceLifecycleConfig</a>

---

##### `resetApplicationName` <a name="resetApplicationName" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.resetApplicationName"></a>

```java
public void resetApplicationName()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetResourceLifecycleConfig` <a name="resetResourceLifecycleConfig" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.resetResourceLifecycleConfig"></a>

```java
public void resetResourceLifecycleConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ElasticbeanstalkApplication resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.isConstruct"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_application.ElasticbeanstalkApplication;

ElasticbeanstalkApplication.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_application.ElasticbeanstalkApplication;

ElasticbeanstalkApplication.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_application.ElasticbeanstalkApplication;

ElasticbeanstalkApplication.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_application.ElasticbeanstalkApplication;

ElasticbeanstalkApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ElasticbeanstalkApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ElasticbeanstalkApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ElasticbeanstalkApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ElasticbeanstalkApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ElasticbeanstalkApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.resourceLifecycleConfig">resourceLifecycleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference">ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.applicationNameInput">applicationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.resourceLifecycleConfigInput">resourceLifecycleConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfig">ElasticbeanstalkApplicationResourceLifecycleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.applicationName">applicationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `resourceLifecycleConfig`<sup>Required</sup> <a name="resourceLifecycleConfig" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.resourceLifecycleConfig"></a>

```java
public ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference getResourceLifecycleConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference">ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference</a>

---

##### `applicationNameInput`<sup>Optional</sup> <a name="applicationNameInput" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.applicationNameInput"></a>

```java
public java.lang.String getApplicationNameInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `resourceLifecycleConfigInput`<sup>Optional</sup> <a name="resourceLifecycleConfigInput" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.resourceLifecycleConfigInput"></a>

```java
public IResolvable|ElasticbeanstalkApplicationResourceLifecycleConfig getResourceLifecycleConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfig">ElasticbeanstalkApplicationResourceLifecycleConfig</a>

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.applicationName"></a>

```java
public java.lang.String getApplicationName();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplication.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticbeanstalkApplicationConfig <a name="ElasticbeanstalkApplicationConfig" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_application.ElasticbeanstalkApplicationConfig;

ElasticbeanstalkApplicationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .applicationName(java.lang.String)
//  .description(java.lang.String)
//  .resourceLifecycleConfig(ElasticbeanstalkApplicationResourceLifecycleConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.applicationName">applicationName</a></code> | <code>java.lang.String</code> | A name for the Elastic Beanstalk application. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.description">description</a></code> | <code>java.lang.String</code> | Your description of the application. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.resourceLifecycleConfig">resourceLifecycleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfig">ElasticbeanstalkApplicationResourceLifecycleConfig</a></code> | Specifies an application resource lifecycle configuration to prevent your application from accumulating too many versions. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationName`<sup>Optional</sup> <a name="applicationName" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.applicationName"></a>

```java
public java.lang.String getApplicationName();
```

- *Type:* java.lang.String

A name for the Elastic Beanstalk application.

If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the application name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_application#application_name ElasticbeanstalkApplication#application_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Your description of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_application#description ElasticbeanstalkApplication#description}

---

##### `resourceLifecycleConfig`<sup>Optional</sup> <a name="resourceLifecycleConfig" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationConfig.property.resourceLifecycleConfig"></a>

```java
public ElasticbeanstalkApplicationResourceLifecycleConfig getResourceLifecycleConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfig">ElasticbeanstalkApplicationResourceLifecycleConfig</a>

Specifies an application resource lifecycle configuration to prevent your application from accumulating too many versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_application#resource_lifecycle_config ElasticbeanstalkApplication#resource_lifecycle_config}

---

### ElasticbeanstalkApplicationResourceLifecycleConfig <a name="ElasticbeanstalkApplicationResourceLifecycleConfig" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_application.ElasticbeanstalkApplicationResourceLifecycleConfig;

ElasticbeanstalkApplicationResourceLifecycleConfig.builder()
//  .serviceRole(java.lang.String)
//  .versionLifecycleConfig(ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfig.property.serviceRole">serviceRole</a></code> | <code>java.lang.String</code> | The ARN of an IAM service role that Elastic Beanstalk has permission to assume. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfig.property.versionLifecycleConfig">versionLifecycleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig</a></code> | Defines lifecycle settings for application versions. |

---

##### `serviceRole`<sup>Optional</sup> <a name="serviceRole" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfig.property.serviceRole"></a>

```java
public java.lang.String getServiceRole();
```

- *Type:* java.lang.String

The ARN of an IAM service role that Elastic Beanstalk has permission to assume.

The ServiceRole property is required the first time that you provide a ResourceLifecycleConfig for the application. After you provide it once, Elastic Beanstalk persists the Service Role with the application, and you don't need to specify it again. You can, however, specify it in subsequent updates to change the Service Role to another value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_application#service_role ElasticbeanstalkApplication#service_role}

---

##### `versionLifecycleConfig`<sup>Optional</sup> <a name="versionLifecycleConfig" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfig.property.versionLifecycleConfig"></a>

```java
public ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig getVersionLifecycleConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig</a>

Defines lifecycle settings for application versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_application#version_lifecycle_config ElasticbeanstalkApplication#version_lifecycle_config}

---

### ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig <a name="ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_application.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig;

ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig.builder()
//  .maxAgeRule(ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule)
//  .maxCountRule(ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig.property.maxAgeRule">maxAgeRule</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule</a></code> | Specify a max age rule to restrict the length of time that application versions are retained for an application. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig.property.maxCountRule">maxCountRule</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule</a></code> | Specify a max count rule to restrict the number of application versions that are retained for an application. |

---

##### `maxAgeRule`<sup>Optional</sup> <a name="maxAgeRule" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig.property.maxAgeRule"></a>

```java
public ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule getMaxAgeRule();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule</a>

Specify a max age rule to restrict the length of time that application versions are retained for an application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_application#max_age_rule ElasticbeanstalkApplication#max_age_rule}

---

##### `maxCountRule`<sup>Optional</sup> <a name="maxCountRule" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig.property.maxCountRule"></a>

```java
public ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule getMaxCountRule();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule</a>

Specify a max count rule to restrict the number of application versions that are retained for an application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_application#max_count_rule ElasticbeanstalkApplication#max_count_rule}

---

### ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule <a name="ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_application.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule;

ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.builder()
//  .deleteSourceFromS3(java.lang.Boolean|IResolvable)
//  .enabled(java.lang.Boolean|IResolvable)
//  .maxAgeInDays(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.property.deleteSourceFromS3">deleteSourceFromS3</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set to true to delete a version's source bundle from Amazon S3 when Elastic Beanstalk deletes the application version. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specify true to apply the rule, or false to disable it. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.property.maxAgeInDays">maxAgeInDays</a></code> | <code>java.lang.Number</code> | Specify the number of days to retain an application versions. |

---

##### `deleteSourceFromS3`<sup>Optional</sup> <a name="deleteSourceFromS3" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.property.deleteSourceFromS3"></a>

```java
public java.lang.Boolean|IResolvable getDeleteSourceFromS3();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set to true to delete a version's source bundle from Amazon S3 when Elastic Beanstalk deletes the application version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_application#delete_source_from_s3 ElasticbeanstalkApplication#delete_source_from_s3}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specify true to apply the rule, or false to disable it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_application#enabled ElasticbeanstalkApplication#enabled}

---

##### `maxAgeInDays`<sup>Optional</sup> <a name="maxAgeInDays" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule.property.maxAgeInDays"></a>

```java
public java.lang.Number getMaxAgeInDays();
```

- *Type:* java.lang.Number

Specify the number of days to retain an application versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_application#max_age_in_days ElasticbeanstalkApplication#max_age_in_days}

---

### ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule <a name="ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_application.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule;

ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.builder()
//  .deleteSourceFromS3(java.lang.Boolean|IResolvable)
//  .enabled(java.lang.Boolean|IResolvable)
//  .maxCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.property.deleteSourceFromS3">deleteSourceFromS3</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Set to true to delete a version's source bundle from Amazon S3 when Elastic Beanstalk deletes the application version. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specify true to apply the rule, or false to disable it. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.property.maxCount">maxCount</a></code> | <code>java.lang.Number</code> | Specify the maximum number of application versions to retain. |

---

##### `deleteSourceFromS3`<sup>Optional</sup> <a name="deleteSourceFromS3" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.property.deleteSourceFromS3"></a>

```java
public java.lang.Boolean|IResolvable getDeleteSourceFromS3();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Set to true to delete a version's source bundle from Amazon S3 when Elastic Beanstalk deletes the application version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_application#delete_source_from_s3 ElasticbeanstalkApplication#delete_source_from_s3}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specify true to apply the rule, or false to disable it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_application#enabled ElasticbeanstalkApplication#enabled}

---

##### `maxCount`<sup>Optional</sup> <a name="maxCount" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule.property.maxCount"></a>

```java
public java.lang.Number getMaxCount();
```

- *Type:* java.lang.Number

Specify the maximum number of application versions to retain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticbeanstalk_application#max_count ElasticbeanstalkApplication#max_count}

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference <a name="ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_application.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference;

new ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.putVersionLifecycleConfig">putVersionLifecycleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.resetServiceRole">resetServiceRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.resetVersionLifecycleConfig">resetVersionLifecycleConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVersionLifecycleConfig` <a name="putVersionLifecycleConfig" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.putVersionLifecycleConfig"></a>

```java
public void putVersionLifecycleConfig(ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.putVersionLifecycleConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig</a>

---

##### `resetServiceRole` <a name="resetServiceRole" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.resetServiceRole"></a>

```java
public void resetServiceRole()
```

##### `resetVersionLifecycleConfig` <a name="resetVersionLifecycleConfig" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.resetVersionLifecycleConfig"></a>

```java
public void resetVersionLifecycleConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.versionLifecycleConfig">versionLifecycleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.serviceRoleInput">serviceRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.versionLifecycleConfigInput">versionLifecycleConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.serviceRole">serviceRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfig">ElasticbeanstalkApplicationResourceLifecycleConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `versionLifecycleConfig`<sup>Required</sup> <a name="versionLifecycleConfig" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.versionLifecycleConfig"></a>

```java
public ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference getVersionLifecycleConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference</a>

---

##### `serviceRoleInput`<sup>Optional</sup> <a name="serviceRoleInput" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.serviceRoleInput"></a>

```java
public java.lang.String getServiceRoleInput();
```

- *Type:* java.lang.String

---

##### `versionLifecycleConfigInput`<sup>Optional</sup> <a name="versionLifecycleConfigInput" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.versionLifecycleConfigInput"></a>

```java
public IResolvable|ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig getVersionLifecycleConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig</a>

---

##### `serviceRole`<sup>Required</sup> <a name="serviceRole" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.serviceRole"></a>

```java
public java.lang.String getServiceRole();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|ElasticbeanstalkApplicationResourceLifecycleConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfig">ElasticbeanstalkApplicationResourceLifecycleConfig</a>

---


### ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference <a name="ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_application.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference;

new ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.resetDeleteSourceFromS3">resetDeleteSourceFromS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.resetMaxAgeInDays">resetMaxAgeInDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteSourceFromS3` <a name="resetDeleteSourceFromS3" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.resetDeleteSourceFromS3"></a>

```java
public void resetDeleteSourceFromS3()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetMaxAgeInDays` <a name="resetMaxAgeInDays" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.resetMaxAgeInDays"></a>

```java
public void resetMaxAgeInDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.deleteSourceFromS3Input">deleteSourceFromS3Input</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.maxAgeInDaysInput">maxAgeInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.deleteSourceFromS3">deleteSourceFromS3</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.maxAgeInDays">maxAgeInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deleteSourceFromS3Input`<sup>Optional</sup> <a name="deleteSourceFromS3Input" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.deleteSourceFromS3Input"></a>

```java
public java.lang.Boolean|IResolvable getDeleteSourceFromS3Input();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxAgeInDaysInput`<sup>Optional</sup> <a name="maxAgeInDaysInput" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.maxAgeInDaysInput"></a>

```java
public java.lang.Number getMaxAgeInDaysInput();
```

- *Type:* java.lang.Number

---

##### `deleteSourceFromS3`<sup>Required</sup> <a name="deleteSourceFromS3" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.deleteSourceFromS3"></a>

```java
public java.lang.Boolean|IResolvable getDeleteSourceFromS3();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxAgeInDays`<sup>Required</sup> <a name="maxAgeInDays" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.maxAgeInDays"></a>

```java
public java.lang.Number getMaxAgeInDays();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference.property.internalValue"></a>

```java
public IResolvable|ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule</a>

---


### ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference <a name="ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_application.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference;

new ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.resetDeleteSourceFromS3">resetDeleteSourceFromS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.resetMaxCount">resetMaxCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteSourceFromS3` <a name="resetDeleteSourceFromS3" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.resetDeleteSourceFromS3"></a>

```java
public void resetDeleteSourceFromS3()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetMaxCount` <a name="resetMaxCount" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.resetMaxCount"></a>

```java
public void resetMaxCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.deleteSourceFromS3Input">deleteSourceFromS3Input</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.maxCountInput">maxCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.deleteSourceFromS3">deleteSourceFromS3</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.maxCount">maxCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deleteSourceFromS3Input`<sup>Optional</sup> <a name="deleteSourceFromS3Input" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.deleteSourceFromS3Input"></a>

```java
public java.lang.Boolean|IResolvable getDeleteSourceFromS3Input();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxCountInput`<sup>Optional</sup> <a name="maxCountInput" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.maxCountInput"></a>

```java
public java.lang.Number getMaxCountInput();
```

- *Type:* java.lang.Number

---

##### `deleteSourceFromS3`<sup>Required</sup> <a name="deleteSourceFromS3" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.deleteSourceFromS3"></a>

```java
public java.lang.Boolean|IResolvable getDeleteSourceFromS3();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxCount`<sup>Required</sup> <a name="maxCount" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.maxCount"></a>

```java
public java.lang.Number getMaxCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference.property.internalValue"></a>

```java
public IResolvable|ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule</a>

---


### ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference <a name="ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_application.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference;

new ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.putMaxAgeRule">putMaxAgeRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.putMaxCountRule">putMaxCountRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.resetMaxAgeRule">resetMaxAgeRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.resetMaxCountRule">resetMaxCountRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMaxAgeRule` <a name="putMaxAgeRule" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.putMaxAgeRule"></a>

```java
public void putMaxAgeRule(ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.putMaxAgeRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule</a>

---

##### `putMaxCountRule` <a name="putMaxCountRule" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.putMaxCountRule"></a>

```java
public void putMaxCountRule(ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.putMaxCountRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule</a>

---

##### `resetMaxAgeRule` <a name="resetMaxAgeRule" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.resetMaxAgeRule"></a>

```java
public void resetMaxAgeRule()
```

##### `resetMaxCountRule` <a name="resetMaxCountRule" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.resetMaxCountRule"></a>

```java
public void resetMaxCountRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.maxAgeRule">maxAgeRule</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.maxCountRule">maxCountRule</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.maxAgeRuleInput">maxAgeRuleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.maxCountRuleInput">maxCountRuleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxAgeRule`<sup>Required</sup> <a name="maxAgeRule" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.maxAgeRule"></a>

```java
public ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference getMaxAgeRule();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRuleOutputReference</a>

---

##### `maxCountRule`<sup>Required</sup> <a name="maxCountRule" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.maxCountRule"></a>

```java
public ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference getMaxCountRule();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRuleOutputReference</a>

---

##### `maxAgeRuleInput`<sup>Optional</sup> <a name="maxAgeRuleInput" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.maxAgeRuleInput"></a>

```java
public IResolvable|ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule getMaxAgeRuleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxAgeRule</a>

---

##### `maxCountRuleInput`<sup>Optional</sup> <a name="maxCountRuleInput" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.maxCountRuleInput"></a>

```java
public IResolvable|ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule getMaxCountRuleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigMaxCountRule</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplication.ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig">ElasticbeanstalkApplicationResourceLifecycleConfigVersionLifecycleConfig</a>

---



