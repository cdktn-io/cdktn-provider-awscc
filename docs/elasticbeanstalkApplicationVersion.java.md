# `elasticbeanstalkApplicationVersion` Submodule <a name="`elasticbeanstalkApplicationVersion` Submodule" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticbeanstalkApplicationVersion <a name="ElasticbeanstalkApplicationVersion" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version awscc_elasticbeanstalk_application_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_application_version.ElasticbeanstalkApplicationVersion;

ElasticbeanstalkApplicationVersion.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationName(java.lang.String)
//  .buildConfiguration(ElasticbeanstalkApplicationVersionBuildConfiguration)
//  .description(java.lang.String)
//  .imageConfiguration(ElasticbeanstalkApplicationVersionImageConfiguration)
//  .process(java.lang.Boolean|IResolvable)
//  .sourceBundle(ElasticbeanstalkApplicationVersionSourceBundle)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.applicationName">applicationName</a></code> | <code>java.lang.String</code> | The name of the Elastic Beanstalk application that is associated with this application version. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.buildConfiguration">buildConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration">ElasticbeanstalkApplicationVersionBuildConfiguration</a></code> | Settings for an AWS CodeBuild build that packages and builds an application version from source code. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of this application version. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.imageConfiguration">imageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration">ElasticbeanstalkApplicationVersionImageConfiguration</a></code> | Configuration for image-based application versions. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.process">process</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Pre-process and validate the environment manifest (`env.yaml`) and configuration files in the source bundle. Leave unset for the service default. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.sourceBundle">sourceBundle</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle">ElasticbeanstalkApplicationVersionSourceBundle</a></code> | The Amazon S3 bucket and key that identify the location of the source bundle for this version. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.applicationName"></a>

- *Type:* java.lang.String

The name of the Elastic Beanstalk application that is associated with this application version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#application_name ElasticbeanstalkApplicationVersion#application_name}

---

##### `buildConfiguration`<sup>Optional</sup> <a name="buildConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.buildConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration">ElasticbeanstalkApplicationVersionBuildConfiguration</a>

Settings for an AWS CodeBuild build that packages and builds an application version from source code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#build_configuration ElasticbeanstalkApplicationVersion#build_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of this application version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#description ElasticbeanstalkApplicationVersion#description}

---

##### `imageConfiguration`<sup>Optional</sup> <a name="imageConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.imageConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration">ElasticbeanstalkApplicationVersionImageConfiguration</a>

Configuration for image-based application versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#image_configuration ElasticbeanstalkApplicationVersion#image_configuration}

---

##### `process`<sup>Optional</sup> <a name="process" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.process"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Pre-process and validate the environment manifest (`env.yaml`) and configuration files in the source bundle. Leave unset for the service default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#process ElasticbeanstalkApplicationVersion#process}

---

##### `sourceBundle`<sup>Optional</sup> <a name="sourceBundle" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.Initializer.parameter.sourceBundle"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle">ElasticbeanstalkApplicationVersionSourceBundle</a>

The Amazon S3 bucket and key that identify the location of the source bundle for this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#source_bundle ElasticbeanstalkApplicationVersion#source_bundle}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.putBuildConfiguration">putBuildConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.putImageConfiguration">putImageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.putSourceBundle">putSourceBundle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetBuildConfiguration">resetBuildConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetImageConfiguration">resetImageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetProcess">resetProcess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetSourceBundle">resetSourceBundle</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBuildConfiguration` <a name="putBuildConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.putBuildConfiguration"></a>

```java
public void putBuildConfiguration(ElasticbeanstalkApplicationVersionBuildConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.putBuildConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration">ElasticbeanstalkApplicationVersionBuildConfiguration</a>

---

##### `putImageConfiguration` <a name="putImageConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.putImageConfiguration"></a>

```java
public void putImageConfiguration(ElasticbeanstalkApplicationVersionImageConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.putImageConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration">ElasticbeanstalkApplicationVersionImageConfiguration</a>

---

##### `putSourceBundle` <a name="putSourceBundle" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.putSourceBundle"></a>

```java
public void putSourceBundle(ElasticbeanstalkApplicationVersionSourceBundle value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.putSourceBundle.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle">ElasticbeanstalkApplicationVersionSourceBundle</a>

---

##### `resetBuildConfiguration` <a name="resetBuildConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetBuildConfiguration"></a>

```java
public void resetBuildConfiguration()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetImageConfiguration` <a name="resetImageConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetImageConfiguration"></a>

```java
public void resetImageConfiguration()
```

##### `resetProcess` <a name="resetProcess" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetProcess"></a>

```java
public void resetProcess()
```

##### `resetSourceBundle` <a name="resetSourceBundle" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.resetSourceBundle"></a>

```java
public void resetSourceBundle()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ElasticbeanstalkApplicationVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.isConstruct"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_application_version.ElasticbeanstalkApplicationVersion;

ElasticbeanstalkApplicationVersion.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_application_version.ElasticbeanstalkApplicationVersion;

ElasticbeanstalkApplicationVersion.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_application_version.ElasticbeanstalkApplicationVersion;

ElasticbeanstalkApplicationVersion.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_application_version.ElasticbeanstalkApplicationVersion;

ElasticbeanstalkApplicationVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ElasticbeanstalkApplicationVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ElasticbeanstalkApplicationVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ElasticbeanstalkApplicationVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ElasticbeanstalkApplicationVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ElasticbeanstalkApplicationVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.applicationVersionId">applicationVersionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.buildConfiguration">buildConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference">ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.imageConfiguration">imageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference">ElasticbeanstalkApplicationVersionImageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.sourceBundle">sourceBundle</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference">ElasticbeanstalkApplicationVersionSourceBundleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.applicationNameInput">applicationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.buildConfigurationInput">buildConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration">ElasticbeanstalkApplicationVersionBuildConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.imageConfigurationInput">imageConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration">ElasticbeanstalkApplicationVersionImageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.processInput">processInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.sourceBundleInput">sourceBundleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle">ElasticbeanstalkApplicationVersionSourceBundle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.applicationName">applicationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.process">process</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationVersionId`<sup>Required</sup> <a name="applicationVersionId" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.applicationVersionId"></a>

```java
public java.lang.String getApplicationVersionId();
```

- *Type:* java.lang.String

---

##### `buildConfiguration`<sup>Required</sup> <a name="buildConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.buildConfiguration"></a>

```java
public ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference getBuildConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference">ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `imageConfiguration`<sup>Required</sup> <a name="imageConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.imageConfiguration"></a>

```java
public ElasticbeanstalkApplicationVersionImageConfigurationOutputReference getImageConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference">ElasticbeanstalkApplicationVersionImageConfigurationOutputReference</a>

---

##### `sourceBundle`<sup>Required</sup> <a name="sourceBundle" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.sourceBundle"></a>

```java
public ElasticbeanstalkApplicationVersionSourceBundleOutputReference getSourceBundle();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference">ElasticbeanstalkApplicationVersionSourceBundleOutputReference</a>

---

##### `applicationNameInput`<sup>Optional</sup> <a name="applicationNameInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.applicationNameInput"></a>

```java
public java.lang.String getApplicationNameInput();
```

- *Type:* java.lang.String

---

##### `buildConfigurationInput`<sup>Optional</sup> <a name="buildConfigurationInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.buildConfigurationInput"></a>

```java
public IResolvable|ElasticbeanstalkApplicationVersionBuildConfiguration getBuildConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration">ElasticbeanstalkApplicationVersionBuildConfiguration</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `imageConfigurationInput`<sup>Optional</sup> <a name="imageConfigurationInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.imageConfigurationInput"></a>

```java
public IResolvable|ElasticbeanstalkApplicationVersionImageConfiguration getImageConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration">ElasticbeanstalkApplicationVersionImageConfiguration</a>

---

##### `processInput`<sup>Optional</sup> <a name="processInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.processInput"></a>

```java
public java.lang.Boolean|IResolvable getProcessInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `sourceBundleInput`<sup>Optional</sup> <a name="sourceBundleInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.sourceBundleInput"></a>

```java
public IResolvable|ElasticbeanstalkApplicationVersionSourceBundle getSourceBundleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle">ElasticbeanstalkApplicationVersionSourceBundle</a>

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.applicationName"></a>

```java
public java.lang.String getApplicationName();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `process`<sup>Required</sup> <a name="process" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.process"></a>

```java
public java.lang.Boolean|IResolvable getProcess();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersion.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticbeanstalkApplicationVersionBuildConfiguration <a name="ElasticbeanstalkApplicationVersionBuildConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_application_version.ElasticbeanstalkApplicationVersionBuildConfiguration;

ElasticbeanstalkApplicationVersionBuildConfiguration.builder()
//  .artifactName(java.lang.String)
//  .codeBuildServiceRole(java.lang.String)
//  .computeType(java.lang.String)
//  .image(java.lang.String)
//  .timeoutInMinutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration.property.artifactName">artifactName</a></code> | <code>java.lang.String</code> | The name of the build artifact. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration.property.codeBuildServiceRole">codeBuildServiceRole</a></code> | <code>java.lang.String</code> | The ARN of the IAM role that AWS CodeBuild assumes to build the application version. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration.property.computeType">computeType</a></code> | <code>java.lang.String</code> | The compute type for the CodeBuild build environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration.property.image">image</a></code> | <code>java.lang.String</code> | The CodeBuild image used for the build environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration.property.timeoutInMinutes">timeoutInMinutes</a></code> | <code>java.lang.Number</code> | The timeout for the CodeBuild build, in minutes. |

---

##### `artifactName`<sup>Optional</sup> <a name="artifactName" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration.property.artifactName"></a>

```java
public java.lang.String getArtifactName();
```

- *Type:* java.lang.String

The name of the build artifact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#artifact_name ElasticbeanstalkApplicationVersion#artifact_name}

---

##### `codeBuildServiceRole`<sup>Optional</sup> <a name="codeBuildServiceRole" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration.property.codeBuildServiceRole"></a>

```java
public java.lang.String getCodeBuildServiceRole();
```

- *Type:* java.lang.String

The ARN of the IAM role that AWS CodeBuild assumes to build the application version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#code_build_service_role ElasticbeanstalkApplicationVersion#code_build_service_role}

---

##### `computeType`<sup>Optional</sup> <a name="computeType" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration.property.computeType"></a>

```java
public java.lang.String getComputeType();
```

- *Type:* java.lang.String

The compute type for the CodeBuild build environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#compute_type ElasticbeanstalkApplicationVersion#compute_type}

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

The CodeBuild image used for the build environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#image ElasticbeanstalkApplicationVersion#image}

---

##### `timeoutInMinutes`<sup>Optional</sup> <a name="timeoutInMinutes" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration.property.timeoutInMinutes"></a>

```java
public java.lang.Number getTimeoutInMinutes();
```

- *Type:* java.lang.Number

The timeout for the CodeBuild build, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#timeout_in_minutes ElasticbeanstalkApplicationVersion#timeout_in_minutes}

---

### ElasticbeanstalkApplicationVersionConfig <a name="ElasticbeanstalkApplicationVersionConfig" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_application_version.ElasticbeanstalkApplicationVersionConfig;

ElasticbeanstalkApplicationVersionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationName(java.lang.String)
//  .buildConfiguration(ElasticbeanstalkApplicationVersionBuildConfiguration)
//  .description(java.lang.String)
//  .imageConfiguration(ElasticbeanstalkApplicationVersionImageConfiguration)
//  .process(java.lang.Boolean|IResolvable)
//  .sourceBundle(ElasticbeanstalkApplicationVersionSourceBundle)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.applicationName">applicationName</a></code> | <code>java.lang.String</code> | The name of the Elastic Beanstalk application that is associated with this application version. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.buildConfiguration">buildConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration">ElasticbeanstalkApplicationVersionBuildConfiguration</a></code> | Settings for an AWS CodeBuild build that packages and builds an application version from source code. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of this application version. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.imageConfiguration">imageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration">ElasticbeanstalkApplicationVersionImageConfiguration</a></code> | Configuration for image-based application versions. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.process">process</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Pre-process and validate the environment manifest (`env.yaml`) and configuration files in the source bundle. Leave unset for the service default. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.sourceBundle">sourceBundle</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle">ElasticbeanstalkApplicationVersionSourceBundle</a></code> | The Amazon S3 bucket and key that identify the location of the source bundle for this version. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.applicationName"></a>

```java
public java.lang.String getApplicationName();
```

- *Type:* java.lang.String

The name of the Elastic Beanstalk application that is associated with this application version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#application_name ElasticbeanstalkApplicationVersion#application_name}

---

##### `buildConfiguration`<sup>Optional</sup> <a name="buildConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.buildConfiguration"></a>

```java
public ElasticbeanstalkApplicationVersionBuildConfiguration getBuildConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration">ElasticbeanstalkApplicationVersionBuildConfiguration</a>

Settings for an AWS CodeBuild build that packages and builds an application version from source code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#build_configuration ElasticbeanstalkApplicationVersion#build_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of this application version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#description ElasticbeanstalkApplicationVersion#description}

---

##### `imageConfiguration`<sup>Optional</sup> <a name="imageConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.imageConfiguration"></a>

```java
public ElasticbeanstalkApplicationVersionImageConfiguration getImageConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration">ElasticbeanstalkApplicationVersionImageConfiguration</a>

Configuration for image-based application versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#image_configuration ElasticbeanstalkApplicationVersion#image_configuration}

---

##### `process`<sup>Optional</sup> <a name="process" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.process"></a>

```java
public java.lang.Boolean|IResolvable getProcess();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Pre-process and validate the environment manifest (`env.yaml`) and configuration files in the source bundle. Leave unset for the service default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#process ElasticbeanstalkApplicationVersion#process}

---

##### `sourceBundle`<sup>Optional</sup> <a name="sourceBundle" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionConfig.property.sourceBundle"></a>

```java
public ElasticbeanstalkApplicationVersionSourceBundle getSourceBundle();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle">ElasticbeanstalkApplicationVersionSourceBundle</a>

The Amazon S3 bucket and key that identify the location of the source bundle for this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#source_bundle ElasticbeanstalkApplicationVersion#source_bundle}

---

### ElasticbeanstalkApplicationVersionImageConfiguration <a name="ElasticbeanstalkApplicationVersionImageConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_application_version.ElasticbeanstalkApplicationVersionImageConfiguration;

ElasticbeanstalkApplicationVersionImageConfiguration.builder()
//  .buildAttribute(ElasticbeanstalkApplicationVersionImageConfigurationBuild)
//  .source(ElasticbeanstalkApplicationVersionImageConfigurationSource)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration.property.buildAttribute">buildAttribute</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild">ElasticbeanstalkApplicationVersionImageConfigurationBuild</a></code> | Configuration for building a container image from source code. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource">ElasticbeanstalkApplicationVersionImageConfigurationSource</a></code> | The container image source for this version, as an ECR image URI. |

---

##### `buildAttribute`<sup>Optional</sup> <a name="buildAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration.property.buildAttribute"></a>

```java
public ElasticbeanstalkApplicationVersionImageConfigurationBuild getBuildAttribute();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild">ElasticbeanstalkApplicationVersionImageConfigurationBuild</a>

Configuration for building a container image from source code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#build ElasticbeanstalkApplicationVersion#build}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration.property.source"></a>

```java
public ElasticbeanstalkApplicationVersionImageConfigurationSource getSource();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource">ElasticbeanstalkApplicationVersionImageConfigurationSource</a>

The container image source for this version, as an ECR image URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#source ElasticbeanstalkApplicationVersion#source}

---

### ElasticbeanstalkApplicationVersionImageConfigurationBuild <a name="ElasticbeanstalkApplicationVersionImageConfigurationBuild" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_application_version.ElasticbeanstalkApplicationVersionImageConfigurationBuild;

ElasticbeanstalkApplicationVersionImageConfigurationBuild.builder()
//  .architecture(java.lang.String)
//  .buildpack(java.lang.String)
//  .codeBuildServiceRole(java.lang.String)
//  .computeType(java.lang.String)
//  .dockerfileLocation(java.lang.String)
//  .timeoutInMinutes(java.lang.Number)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.architecture">architecture</a></code> | <code>java.lang.String</code> | The target architecture for the built container image. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.buildpack">buildpack</a></code> | <code>java.lang.String</code> | The buildpack to use for building the image. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.codeBuildServiceRole">codeBuildServiceRole</a></code> | <code>java.lang.String</code> | The ARN of the IAM role that AWS CodeBuild assumes to build the application version. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.computeType">computeType</a></code> | <code>java.lang.String</code> | The compute type for the CodeBuild build environment. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.dockerfileLocation">dockerfileLocation</a></code> | <code>java.lang.String</code> | The path to the Dockerfile, relative to the source root. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.timeoutInMinutes">timeoutInMinutes</a></code> | <code>java.lang.Number</code> | The timeout for the CodeBuild build, in minutes. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.type">type</a></code> | <code>java.lang.String</code> | The type of image build: docker or buildpack. |

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.architecture"></a>

```java
public java.lang.String getArchitecture();
```

- *Type:* java.lang.String

The target architecture for the built container image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#architecture ElasticbeanstalkApplicationVersion#architecture}

---

##### `buildpack`<sup>Optional</sup> <a name="buildpack" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.buildpack"></a>

```java
public java.lang.String getBuildpack();
```

- *Type:* java.lang.String

The buildpack to use for building the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#buildpack ElasticbeanstalkApplicationVersion#buildpack}

---

##### `codeBuildServiceRole`<sup>Optional</sup> <a name="codeBuildServiceRole" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.codeBuildServiceRole"></a>

```java
public java.lang.String getCodeBuildServiceRole();
```

- *Type:* java.lang.String

The ARN of the IAM role that AWS CodeBuild assumes to build the application version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#code_build_service_role ElasticbeanstalkApplicationVersion#code_build_service_role}

---

##### `computeType`<sup>Optional</sup> <a name="computeType" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.computeType"></a>

```java
public java.lang.String getComputeType();
```

- *Type:* java.lang.String

The compute type for the CodeBuild build environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#compute_type ElasticbeanstalkApplicationVersion#compute_type}

---

##### `dockerfileLocation`<sup>Optional</sup> <a name="dockerfileLocation" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.dockerfileLocation"></a>

```java
public java.lang.String getDockerfileLocation();
```

- *Type:* java.lang.String

The path to the Dockerfile, relative to the source root.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#dockerfile_location ElasticbeanstalkApplicationVersion#dockerfile_location}

---

##### `timeoutInMinutes`<sup>Optional</sup> <a name="timeoutInMinutes" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.timeoutInMinutes"></a>

```java
public java.lang.Number getTimeoutInMinutes();
```

- *Type:* java.lang.Number

The timeout for the CodeBuild build, in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#timeout_in_minutes ElasticbeanstalkApplicationVersion#timeout_in_minutes}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of image build: docker or buildpack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#type ElasticbeanstalkApplicationVersion#type}

---

### ElasticbeanstalkApplicationVersionImageConfigurationSource <a name="ElasticbeanstalkApplicationVersionImageConfigurationSource" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_application_version.ElasticbeanstalkApplicationVersionImageConfigurationSource;

ElasticbeanstalkApplicationVersionImageConfigurationSource.builder()
//  .uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource.property.uri">uri</a></code> | <code>java.lang.String</code> | The URI of the container image, e.g. an ECR image URI. |

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

The URI of the container image, e.g. an ECR image URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#uri ElasticbeanstalkApplicationVersion#uri}

---

### ElasticbeanstalkApplicationVersionSourceBundle <a name="ElasticbeanstalkApplicationVersionSourceBundle" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_application_version.ElasticbeanstalkApplicationVersionSourceBundle;

ElasticbeanstalkApplicationVersionSourceBundle.builder()
//  .s3Bucket(java.lang.String)
//  .s3Key(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle.property.s3Bucket">s3Bucket</a></code> | <code>java.lang.String</code> | The Amazon S3 bucket where the data is located. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle.property.s3Key">s3Key</a></code> | <code>java.lang.String</code> | The Amazon S3 key where the data is located. |

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle.property.s3Bucket"></a>

```java
public java.lang.String getS3Bucket();
```

- *Type:* java.lang.String

The Amazon S3 bucket where the data is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#s3_bucket ElasticbeanstalkApplicationVersion#s3_bucket}

---

##### `s3Key`<sup>Optional</sup> <a name="s3Key" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle.property.s3Key"></a>

```java
public java.lang.String getS3Key();
```

- *Type:* java.lang.String

The Amazon S3 key where the data is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/elasticbeanstalk_application_version#s3_key ElasticbeanstalkApplicationVersion#s3_key}

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference <a name="ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_application_version.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference;

new ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resetArtifactName">resetArtifactName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resetCodeBuildServiceRole">resetCodeBuildServiceRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resetComputeType">resetComputeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resetImage">resetImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resetTimeoutInMinutes">resetTimeoutInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArtifactName` <a name="resetArtifactName" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resetArtifactName"></a>

```java
public void resetArtifactName()
```

##### `resetCodeBuildServiceRole` <a name="resetCodeBuildServiceRole" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resetCodeBuildServiceRole"></a>

```java
public void resetCodeBuildServiceRole()
```

##### `resetComputeType` <a name="resetComputeType" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resetComputeType"></a>

```java
public void resetComputeType()
```

##### `resetImage` <a name="resetImage" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resetImage"></a>

```java
public void resetImage()
```

##### `resetTimeoutInMinutes` <a name="resetTimeoutInMinutes" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.resetTimeoutInMinutes"></a>

```java
public void resetTimeoutInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.artifactNameInput">artifactNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.codeBuildServiceRoleInput">codeBuildServiceRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.computeTypeInput">computeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.imageInput">imageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.timeoutInMinutesInput">timeoutInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.artifactName">artifactName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.codeBuildServiceRole">codeBuildServiceRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.computeType">computeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.image">image</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.timeoutInMinutes">timeoutInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration">ElasticbeanstalkApplicationVersionBuildConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `artifactNameInput`<sup>Optional</sup> <a name="artifactNameInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.artifactNameInput"></a>

```java
public java.lang.String getArtifactNameInput();
```

- *Type:* java.lang.String

---

##### `codeBuildServiceRoleInput`<sup>Optional</sup> <a name="codeBuildServiceRoleInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.codeBuildServiceRoleInput"></a>

```java
public java.lang.String getCodeBuildServiceRoleInput();
```

- *Type:* java.lang.String

---

##### `computeTypeInput`<sup>Optional</sup> <a name="computeTypeInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.computeTypeInput"></a>

```java
public java.lang.String getComputeTypeInput();
```

- *Type:* java.lang.String

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.imageInput"></a>

```java
public java.lang.String getImageInput();
```

- *Type:* java.lang.String

---

##### `timeoutInMinutesInput`<sup>Optional</sup> <a name="timeoutInMinutesInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.timeoutInMinutesInput"></a>

```java
public java.lang.Number getTimeoutInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `artifactName`<sup>Required</sup> <a name="artifactName" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.artifactName"></a>

```java
public java.lang.String getArtifactName();
```

- *Type:* java.lang.String

---

##### `codeBuildServiceRole`<sup>Required</sup> <a name="codeBuildServiceRole" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.codeBuildServiceRole"></a>

```java
public java.lang.String getCodeBuildServiceRole();
```

- *Type:* java.lang.String

---

##### `computeType`<sup>Required</sup> <a name="computeType" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.computeType"></a>

```java
public java.lang.String getComputeType();
```

- *Type:* java.lang.String

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

---

##### `timeoutInMinutes`<sup>Required</sup> <a name="timeoutInMinutes" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.timeoutInMinutes"></a>

```java
public java.lang.Number getTimeoutInMinutes();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|ElasticbeanstalkApplicationVersionBuildConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionBuildConfiguration">ElasticbeanstalkApplicationVersionBuildConfiguration</a>

---


### ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference <a name="ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_application_version.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference;

new ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetArchitecture">resetArchitecture</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetBuildpack">resetBuildpack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetCodeBuildServiceRole">resetCodeBuildServiceRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetComputeType">resetComputeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetDockerfileLocation">resetDockerfileLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetTimeoutInMinutes">resetTimeoutInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArchitecture` <a name="resetArchitecture" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetArchitecture"></a>

```java
public void resetArchitecture()
```

##### `resetBuildpack` <a name="resetBuildpack" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetBuildpack"></a>

```java
public void resetBuildpack()
```

##### `resetCodeBuildServiceRole` <a name="resetCodeBuildServiceRole" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetCodeBuildServiceRole"></a>

```java
public void resetCodeBuildServiceRole()
```

##### `resetComputeType` <a name="resetComputeType" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetComputeType"></a>

```java
public void resetComputeType()
```

##### `resetDockerfileLocation` <a name="resetDockerfileLocation" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetDockerfileLocation"></a>

```java
public void resetDockerfileLocation()
```

##### `resetTimeoutInMinutes` <a name="resetTimeoutInMinutes" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetTimeoutInMinutes"></a>

```java
public void resetTimeoutInMinutes()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.architectureInput">architectureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.buildpackInput">buildpackInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.codeBuildServiceRoleInput">codeBuildServiceRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.computeTypeInput">computeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.dockerfileLocationInput">dockerfileLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.timeoutInMinutesInput">timeoutInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.architecture">architecture</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.buildpack">buildpack</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.codeBuildServiceRole">codeBuildServiceRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.computeType">computeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.dockerfileLocation">dockerfileLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.timeoutInMinutes">timeoutInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild">ElasticbeanstalkApplicationVersionImageConfigurationBuild</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `architectureInput`<sup>Optional</sup> <a name="architectureInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.architectureInput"></a>

```java
public java.lang.String getArchitectureInput();
```

- *Type:* java.lang.String

---

##### `buildpackInput`<sup>Optional</sup> <a name="buildpackInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.buildpackInput"></a>

```java
public java.lang.String getBuildpackInput();
```

- *Type:* java.lang.String

---

##### `codeBuildServiceRoleInput`<sup>Optional</sup> <a name="codeBuildServiceRoleInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.codeBuildServiceRoleInput"></a>

```java
public java.lang.String getCodeBuildServiceRoleInput();
```

- *Type:* java.lang.String

---

##### `computeTypeInput`<sup>Optional</sup> <a name="computeTypeInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.computeTypeInput"></a>

```java
public java.lang.String getComputeTypeInput();
```

- *Type:* java.lang.String

---

##### `dockerfileLocationInput`<sup>Optional</sup> <a name="dockerfileLocationInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.dockerfileLocationInput"></a>

```java
public java.lang.String getDockerfileLocationInput();
```

- *Type:* java.lang.String

---

##### `timeoutInMinutesInput`<sup>Optional</sup> <a name="timeoutInMinutesInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.timeoutInMinutesInput"></a>

```java
public java.lang.Number getTimeoutInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.architecture"></a>

```java
public java.lang.String getArchitecture();
```

- *Type:* java.lang.String

---

##### `buildpack`<sup>Required</sup> <a name="buildpack" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.buildpack"></a>

```java
public java.lang.String getBuildpack();
```

- *Type:* java.lang.String

---

##### `codeBuildServiceRole`<sup>Required</sup> <a name="codeBuildServiceRole" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.codeBuildServiceRole"></a>

```java
public java.lang.String getCodeBuildServiceRole();
```

- *Type:* java.lang.String

---

##### `computeType`<sup>Required</sup> <a name="computeType" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.computeType"></a>

```java
public java.lang.String getComputeType();
```

- *Type:* java.lang.String

---

##### `dockerfileLocation`<sup>Required</sup> <a name="dockerfileLocation" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.dockerfileLocation"></a>

```java
public java.lang.String getDockerfileLocation();
```

- *Type:* java.lang.String

---

##### `timeoutInMinutes`<sup>Required</sup> <a name="timeoutInMinutes" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.timeoutInMinutes"></a>

```java
public java.lang.Number getTimeoutInMinutes();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference.property.internalValue"></a>

```java
public IResolvable|ElasticbeanstalkApplicationVersionImageConfigurationBuild getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild">ElasticbeanstalkApplicationVersionImageConfigurationBuild</a>

---


### ElasticbeanstalkApplicationVersionImageConfigurationOutputReference <a name="ElasticbeanstalkApplicationVersionImageConfigurationOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_application_version.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference;

new ElasticbeanstalkApplicationVersionImageConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.putBuildAttribute">putBuildAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.resetBuildAttribute">resetBuildAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.resetSource">resetSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBuildAttribute` <a name="putBuildAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.putBuildAttribute"></a>

```java
public void putBuildAttribute(ElasticbeanstalkApplicationVersionImageConfigurationBuild value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.putBuildAttribute.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild">ElasticbeanstalkApplicationVersionImageConfigurationBuild</a>

---

##### `putSource` <a name="putSource" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.putSource"></a>

```java
public void putSource(ElasticbeanstalkApplicationVersionImageConfigurationSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource">ElasticbeanstalkApplicationVersionImageConfigurationSource</a>

---

##### `resetBuildAttribute` <a name="resetBuildAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.resetBuildAttribute"></a>

```java
public void resetBuildAttribute()
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.resetSource"></a>

```java
public void resetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.buildAttribute">buildAttribute</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference">ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference">ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.buildAttributeInput">buildAttributeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild">ElasticbeanstalkApplicationVersionImageConfigurationBuild</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.sourceInput">sourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource">ElasticbeanstalkApplicationVersionImageConfigurationSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration">ElasticbeanstalkApplicationVersionImageConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `buildAttribute`<sup>Required</sup> <a name="buildAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.buildAttribute"></a>

```java
public ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference getBuildAttribute();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference">ElasticbeanstalkApplicationVersionImageConfigurationBuildOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.source"></a>

```java
public ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference getSource();
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference">ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference</a>

---

##### `buildAttributeInput`<sup>Optional</sup> <a name="buildAttributeInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.buildAttributeInput"></a>

```java
public IResolvable|ElasticbeanstalkApplicationVersionImageConfigurationBuild getBuildAttributeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationBuild">ElasticbeanstalkApplicationVersionImageConfigurationBuild</a>

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.sourceInput"></a>

```java
public IResolvable|ElasticbeanstalkApplicationVersionImageConfigurationSource getSourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource">ElasticbeanstalkApplicationVersionImageConfigurationSource</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|ElasticbeanstalkApplicationVersionImageConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfiguration">ElasticbeanstalkApplicationVersionImageConfiguration</a>

---


### ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference <a name="ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_application_version.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference;

new ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.resetUri">resetUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUri` <a name="resetUri" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.resetUri"></a>

```java
public void resetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource">ElasticbeanstalkApplicationVersionImageConfigurationSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSourceOutputReference.property.internalValue"></a>

```java
public IResolvable|ElasticbeanstalkApplicationVersionImageConfigurationSource getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionImageConfigurationSource">ElasticbeanstalkApplicationVersionImageConfigurationSource</a>

---


### ElasticbeanstalkApplicationVersionSourceBundleOutputReference <a name="ElasticbeanstalkApplicationVersionSourceBundleOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elasticbeanstalk_application_version.ElasticbeanstalkApplicationVersionSourceBundleOutputReference;

new ElasticbeanstalkApplicationVersionSourceBundleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.resetS3Bucket">resetS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.resetS3Key">resetS3Key</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3Bucket` <a name="resetS3Bucket" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.resetS3Bucket"></a>

```java
public void resetS3Bucket()
```

##### `resetS3Key` <a name="resetS3Key" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.resetS3Key"></a>

```java
public void resetS3Key()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.s3BucketInput">s3BucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.s3KeyInput">s3KeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.s3Bucket">s3Bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.s3Key">s3Key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle">ElasticbeanstalkApplicationVersionSourceBundle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3BucketInput`<sup>Optional</sup> <a name="s3BucketInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.s3BucketInput"></a>

```java
public java.lang.String getS3BucketInput();
```

- *Type:* java.lang.String

---

##### `s3KeyInput`<sup>Optional</sup> <a name="s3KeyInput" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.s3KeyInput"></a>

```java
public java.lang.String getS3KeyInput();
```

- *Type:* java.lang.String

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.s3Bucket"></a>

```java
public java.lang.String getS3Bucket();
```

- *Type:* java.lang.String

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.s3Key"></a>

```java
public java.lang.String getS3Key();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundleOutputReference.property.internalValue"></a>

```java
public IResolvable|ElasticbeanstalkApplicationVersionSourceBundle getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticbeanstalkApplicationVersion.ElasticbeanstalkApplicationVersionSourceBundle">ElasticbeanstalkApplicationVersionSourceBundle</a>

---



