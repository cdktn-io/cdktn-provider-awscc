# `glueSession` Submodule <a name="`glueSession` Submodule" id="@cdktn/provider-awscc.glueSession"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueSession <a name="GlueSession" id="@cdktn/provider-awscc.glueSession.GlueSession"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session awscc_glue_session}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_session.GlueSession;

GlueSession.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .command(GlueSessionCommand)
    .role(java.lang.String)
    .sessionId(java.lang.String)
//  .connections(GlueSessionConnections)
//  .defaultArguments(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .glueVersion(java.lang.String)
//  .idleTimeout(java.lang.Number)
//  .maxCapacity(java.lang.Number)
//  .numberOfWorkers(java.lang.Number)
//  .requestOrigin(java.lang.String)
//  .securityConfiguration(java.lang.String)
//  .tags(IResolvable|java.util.List<GlueSessionTags>)
//  .timeout(java.lang.Number)
//  .workerType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.command">command</a></code> | <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommand">GlueSessionCommand</a></code> | The SessionCommand that runs the job. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | The IAM Role ARN. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.sessionId">sessionId</a></code> | <code>java.lang.String</code> | The ID of the session. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.connections">connections</a></code> | <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnections">GlueSessionConnections</a></code> | Specifies the connections used by the session. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.defaultArguments">defaultArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map array of key-value pairs. Max is 75 pairs. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the session. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.glueVersion">glueVersion</a></code> | <code>java.lang.String</code> | The Glue version determines the versions of Apache Spark and Python that Glue supports. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.idleTimeout">idleTimeout</a></code> | <code>java.lang.Number</code> | The number of minutes when idle before session times out. Default is the value of Timeout. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | The number of Glue data processing units (DPUs) that can be allocated when the job runs. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.numberOfWorkers">numberOfWorkers</a></code> | <code>java.lang.Number</code> | The number of workers of a defined WorkerType to use for the session. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.requestOrigin">requestOrigin</a></code> | <code>java.lang.String</code> | The origin of the request. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.securityConfiguration">securityConfiguration</a></code> | <code>java.lang.String</code> | The name of the SecurityConfiguration structure to be used with the session. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueSession.GlueSessionTags">GlueSessionTags</a>></code> | The tags belonging to the session. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.timeout">timeout</a></code> | <code>java.lang.Number</code> | The number of minutes before session times out. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.workerType">workerType</a></code> | <code>java.lang.String</code> | The type of predefined worker that is allocated when a session runs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.command"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommand">GlueSessionCommand</a>

The SessionCommand that runs the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#command GlueSession#command}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.role"></a>

- *Type:* java.lang.String

The IAM Role ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#role GlueSession#role}

---

##### `sessionId`<sup>Required</sup> <a name="sessionId" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.sessionId"></a>

- *Type:* java.lang.String

The ID of the session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#session_id GlueSession#session_id}

---

##### `connections`<sup>Optional</sup> <a name="connections" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.connections"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnections">GlueSessionConnections</a>

Specifies the connections used by the session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#connections GlueSession#connections}

---

##### `defaultArguments`<sup>Optional</sup> <a name="defaultArguments" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.defaultArguments"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map array of key-value pairs. Max is 75 pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#default_arguments GlueSession#default_arguments}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#description GlueSession#description}

---

##### `glueVersion`<sup>Optional</sup> <a name="glueVersion" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.glueVersion"></a>

- *Type:* java.lang.String

The Glue version determines the versions of Apache Spark and Python that Glue supports.

The GlueVersion must be greater than 2.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#glue_version GlueSession#glue_version}

---

##### `idleTimeout`<sup>Optional</sup> <a name="idleTimeout" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.idleTimeout"></a>

- *Type:* java.lang.Number

The number of minutes when idle before session times out. Default is the value of Timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#idle_timeout GlueSession#idle_timeout}

---

##### `maxCapacity`<sup>Optional</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.maxCapacity"></a>

- *Type:* java.lang.Number

The number of Glue data processing units (DPUs) that can be allocated when the job runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#max_capacity GlueSession#max_capacity}

---

##### `numberOfWorkers`<sup>Optional</sup> <a name="numberOfWorkers" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.numberOfWorkers"></a>

- *Type:* java.lang.Number

The number of workers of a defined WorkerType to use for the session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#number_of_workers GlueSession#number_of_workers}

---

##### `requestOrigin`<sup>Optional</sup> <a name="requestOrigin" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.requestOrigin"></a>

- *Type:* java.lang.String

The origin of the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#request_origin GlueSession#request_origin}

---

##### `securityConfiguration`<sup>Optional</sup> <a name="securityConfiguration" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.securityConfiguration"></a>

- *Type:* java.lang.String

The name of the SecurityConfiguration structure to be used with the session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#security_configuration GlueSession#security_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueSession.GlueSessionTags">GlueSessionTags</a>>

The tags belonging to the session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#tags GlueSession#tags}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.timeout"></a>

- *Type:* java.lang.Number

The number of minutes before session times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#timeout GlueSession#timeout}

---

##### `workerType`<sup>Optional</sup> <a name="workerType" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.workerType"></a>

- *Type:* java.lang.String

The type of predefined worker that is allocated when a session runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#worker_type GlueSession#worker_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.putCommand">putCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.putConnections">putConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.resetConnections">resetConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.resetDefaultArguments">resetDefaultArguments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.resetGlueVersion">resetGlueVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.resetIdleTimeout">resetIdleTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.resetMaxCapacity">resetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.resetNumberOfWorkers">resetNumberOfWorkers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.resetRequestOrigin">resetRequestOrigin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.resetSecurityConfiguration">resetSecurityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.resetWorkerType">resetWorkerType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueSession.GlueSession.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.glueSession.GlueSession.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.glueSession.GlueSession.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.glueSession.GlueSession.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueSession.GlueSession.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueSession.GlueSession.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.glueSession.GlueSession.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.glueSession.GlueSession.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.glueSession.GlueSession.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.glueSession.GlueSession.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.glueSession.GlueSession.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.glueSession.GlueSession.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.glueSession.GlueSession.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueSession.GlueSession.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueSession.GlueSession.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueSession.GlueSession.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueSession.GlueSession.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueSession.GlueSession.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueSession.GlueSession.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueSession.GlueSession.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueSession.GlueSession.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueSession.GlueSession.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueSession.GlueSession.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueSession.GlueSession.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueSession.GlueSession.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueSession.GlueSession.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueSession.GlueSession.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueSession.GlueSession.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueSession.GlueSession.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueSession.GlueSession.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueSession.GlueSession.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueSession.GlueSession.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.glueSession.GlueSession.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.glueSession.GlueSession.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueSession.GlueSession.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueSession.GlueSession.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueSession.GlueSession.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueSession.GlueSession.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.glueSession.GlueSession.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueSession.GlueSession.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.glueSession.GlueSession.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueSession.GlueSession.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.glueSession.GlueSession.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.glueSession.GlueSession.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueSession.GlueSession.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCommand` <a name="putCommand" id="@cdktn/provider-awscc.glueSession.GlueSession.putCommand"></a>

```java
public void putCommand(GlueSessionCommand value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueSession.GlueSession.putCommand.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommand">GlueSessionCommand</a>

---

##### `putConnections` <a name="putConnections" id="@cdktn/provider-awscc.glueSession.GlueSession.putConnections"></a>

```java
public void putConnections(GlueSessionConnections value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueSession.GlueSession.putConnections.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnections">GlueSessionConnections</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.glueSession.GlueSession.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<GlueSessionTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueSession.GlueSession.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueSession.GlueSessionTags">GlueSessionTags</a>>

---

##### `resetConnections` <a name="resetConnections" id="@cdktn/provider-awscc.glueSession.GlueSession.resetConnections"></a>

```java
public void resetConnections()
```

##### `resetDefaultArguments` <a name="resetDefaultArguments" id="@cdktn/provider-awscc.glueSession.GlueSession.resetDefaultArguments"></a>

```java
public void resetDefaultArguments()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.glueSession.GlueSession.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetGlueVersion` <a name="resetGlueVersion" id="@cdktn/provider-awscc.glueSession.GlueSession.resetGlueVersion"></a>

```java
public void resetGlueVersion()
```

##### `resetIdleTimeout` <a name="resetIdleTimeout" id="@cdktn/provider-awscc.glueSession.GlueSession.resetIdleTimeout"></a>

```java
public void resetIdleTimeout()
```

##### `resetMaxCapacity` <a name="resetMaxCapacity" id="@cdktn/provider-awscc.glueSession.GlueSession.resetMaxCapacity"></a>

```java
public void resetMaxCapacity()
```

##### `resetNumberOfWorkers` <a name="resetNumberOfWorkers" id="@cdktn/provider-awscc.glueSession.GlueSession.resetNumberOfWorkers"></a>

```java
public void resetNumberOfWorkers()
```

##### `resetRequestOrigin` <a name="resetRequestOrigin" id="@cdktn/provider-awscc.glueSession.GlueSession.resetRequestOrigin"></a>

```java
public void resetRequestOrigin()
```

##### `resetSecurityConfiguration` <a name="resetSecurityConfiguration" id="@cdktn/provider-awscc.glueSession.GlueSession.resetSecurityConfiguration"></a>

```java
public void resetSecurityConfiguration()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.glueSession.GlueSession.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktn/provider-awscc.glueSession.GlueSession.resetTimeout"></a>

```java
public void resetTimeout()
```

##### `resetWorkerType` <a name="resetWorkerType" id="@cdktn/provider-awscc.glueSession.GlueSession.resetWorkerType"></a>

```java
public void resetWorkerType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GlueSession resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.glueSession.GlueSession.isConstruct"></a>

```java
import io.cdktn.providers.awscc.glue_session.GlueSession;

GlueSession.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueSession.GlueSession.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.glueSession.GlueSession.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.glue_session.GlueSession;

GlueSession.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueSession.GlueSession.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.glueSession.GlueSession.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.glue_session.GlueSession;

GlueSession.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueSession.GlueSession.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.glueSession.GlueSession.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.glue_session.GlueSession;

GlueSession.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GlueSession.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GlueSession resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueSession.GlueSession.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.glueSession.GlueSession.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GlueSession to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.glueSession.GlueSession.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GlueSession that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueSession.GlueSession.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GlueSession to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.command">command</a></code> | <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference">GlueSessionCommandOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.connections">connections</a></code> | <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference">GlueSessionConnectionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.progress">progress</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsList">GlueSessionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.commandInput">commandInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommand">GlueSessionCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.connectionsInput">connectionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnections">GlueSessionConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.defaultArgumentsInput">defaultArgumentsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.glueVersionInput">glueVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.idleTimeoutInput">idleTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.maxCapacityInput">maxCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.numberOfWorkersInput">numberOfWorkersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.requestOriginInput">requestOriginInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.securityConfigurationInput">securityConfigurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.sessionIdInput">sessionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueSession.GlueSessionTags">GlueSessionTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.workerTypeInput">workerTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.defaultArguments">defaultArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.glueVersion">glueVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.idleTimeout">idleTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.numberOfWorkers">numberOfWorkers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.requestOrigin">requestOrigin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.securityConfiguration">securityConfiguration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.sessionId">sessionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.workerType">workerType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.glueSession.GlueSession.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.glueSession.GlueSession.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueSession.GlueSession.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.glueSession.GlueSession.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.glueSession.GlueSession.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.glueSession.GlueSession.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.glueSession.GlueSession.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueSession.GlueSession.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueSession.GlueSession.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueSession.GlueSession.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueSession.GlueSession.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueSession.GlueSession.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueSession.GlueSession.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueSession.GlueSession.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.glueSession.GlueSession.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-awscc.glueSession.GlueSession.property.command"></a>

```java
public GlueSessionCommandOutputReference getCommand();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference">GlueSessionCommandOutputReference</a>

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktn/provider-awscc.glueSession.GlueSession.property.connections"></a>

```java
public GlueSessionConnectionsOutputReference getConnections();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference">GlueSessionConnectionsOutputReference</a>

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-awscc.glueSession.GlueSession.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueSession.GlueSession.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `progress`<sup>Required</sup> <a name="progress" id="@cdktn/provider-awscc.glueSession.GlueSession.property.progress"></a>

```java
public java.lang.Number getProgress();
```

- *Type:* java.lang.Number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.glueSession.GlueSession.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.glueSession.GlueSession.property.tags"></a>

```java
public GlueSessionTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsList">GlueSessionTagsList</a>

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktn/provider-awscc.glueSession.GlueSession.property.commandInput"></a>

```java
public IResolvable|GlueSessionCommand getCommandInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommand">GlueSessionCommand</a>

---

##### `connectionsInput`<sup>Optional</sup> <a name="connectionsInput" id="@cdktn/provider-awscc.glueSession.GlueSession.property.connectionsInput"></a>

```java
public IResolvable|GlueSessionConnections getConnectionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnections">GlueSessionConnections</a>

---

##### `defaultArgumentsInput`<sup>Optional</sup> <a name="defaultArgumentsInput" id="@cdktn/provider-awscc.glueSession.GlueSession.property.defaultArgumentsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefaultArgumentsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.glueSession.GlueSession.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `glueVersionInput`<sup>Optional</sup> <a name="glueVersionInput" id="@cdktn/provider-awscc.glueSession.GlueSession.property.glueVersionInput"></a>

```java
public java.lang.String getGlueVersionInput();
```

- *Type:* java.lang.String

---

##### `idleTimeoutInput`<sup>Optional</sup> <a name="idleTimeoutInput" id="@cdktn/provider-awscc.glueSession.GlueSession.property.idleTimeoutInput"></a>

```java
public java.lang.Number getIdleTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `maxCapacityInput`<sup>Optional</sup> <a name="maxCapacityInput" id="@cdktn/provider-awscc.glueSession.GlueSession.property.maxCapacityInput"></a>

```java
public java.lang.Number getMaxCapacityInput();
```

- *Type:* java.lang.Number

---

##### `numberOfWorkersInput`<sup>Optional</sup> <a name="numberOfWorkersInput" id="@cdktn/provider-awscc.glueSession.GlueSession.property.numberOfWorkersInput"></a>

```java
public java.lang.Number getNumberOfWorkersInput();
```

- *Type:* java.lang.Number

---

##### `requestOriginInput`<sup>Optional</sup> <a name="requestOriginInput" id="@cdktn/provider-awscc.glueSession.GlueSession.property.requestOriginInput"></a>

```java
public java.lang.String getRequestOriginInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-awscc.glueSession.GlueSession.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `securityConfigurationInput`<sup>Optional</sup> <a name="securityConfigurationInput" id="@cdktn/provider-awscc.glueSession.GlueSession.property.securityConfigurationInput"></a>

```java
public java.lang.String getSecurityConfigurationInput();
```

- *Type:* java.lang.String

---

##### `sessionIdInput`<sup>Optional</sup> <a name="sessionIdInput" id="@cdktn/provider-awscc.glueSession.GlueSession.property.sessionIdInput"></a>

```java
public java.lang.String getSessionIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.glueSession.GlueSession.property.tagsInput"></a>

```java
public IResolvable|java.util.List<GlueSessionTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueSession.GlueSessionTags">GlueSessionTags</a>>

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktn/provider-awscc.glueSession.GlueSession.property.timeoutInput"></a>

```java
public java.lang.Number getTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `workerTypeInput`<sup>Optional</sup> <a name="workerTypeInput" id="@cdktn/provider-awscc.glueSession.GlueSession.property.workerTypeInput"></a>

```java
public java.lang.String getWorkerTypeInput();
```

- *Type:* java.lang.String

---

##### `defaultArguments`<sup>Required</sup> <a name="defaultArguments" id="@cdktn/provider-awscc.glueSession.GlueSession.property.defaultArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefaultArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.glueSession.GlueSession.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `glueVersion`<sup>Required</sup> <a name="glueVersion" id="@cdktn/provider-awscc.glueSession.GlueSession.property.glueVersion"></a>

```java
public java.lang.String getGlueVersion();
```

- *Type:* java.lang.String

---

##### `idleTimeout`<sup>Required</sup> <a name="idleTimeout" id="@cdktn/provider-awscc.glueSession.GlueSession.property.idleTimeout"></a>

```java
public java.lang.Number getIdleTimeout();
```

- *Type:* java.lang.Number

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.glueSession.GlueSession.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

---

##### `numberOfWorkers`<sup>Required</sup> <a name="numberOfWorkers" id="@cdktn/provider-awscc.glueSession.GlueSession.property.numberOfWorkers"></a>

```java
public java.lang.Number getNumberOfWorkers();
```

- *Type:* java.lang.Number

---

##### `requestOrigin`<sup>Required</sup> <a name="requestOrigin" id="@cdktn/provider-awscc.glueSession.GlueSession.property.requestOrigin"></a>

```java
public java.lang.String getRequestOrigin();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.glueSession.GlueSession.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `securityConfiguration`<sup>Required</sup> <a name="securityConfiguration" id="@cdktn/provider-awscc.glueSession.GlueSession.property.securityConfiguration"></a>

```java
public java.lang.String getSecurityConfiguration();
```

- *Type:* java.lang.String

---

##### `sessionId`<sup>Required</sup> <a name="sessionId" id="@cdktn/provider-awscc.glueSession.GlueSession.property.sessionId"></a>

```java
public java.lang.String getSessionId();
```

- *Type:* java.lang.String

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-awscc.glueSession.GlueSession.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

##### `workerType`<sup>Required</sup> <a name="workerType" id="@cdktn/provider-awscc.glueSession.GlueSession.property.workerType"></a>

```java
public java.lang.String getWorkerType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.glueSession.GlueSession.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GlueSessionCommand <a name="GlueSessionCommand" id="@cdktn/provider-awscc.glueSession.GlueSessionCommand"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueSession.GlueSessionCommand.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_session.GlueSessionCommand;

GlueSessionCommand.builder()
//  .name(java.lang.String)
//  .pythonVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommand.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the name of the SessionCommand. Can be 'glueetl' or 'gluestreaming'. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommand.property.pythonVersion">pythonVersion</a></code> | <code>java.lang.String</code> | Specifies the Python version. The Python version indicates the version supported for jobs of type Spark. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueSession.GlueSessionCommand.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the name of the SessionCommand. Can be 'glueetl' or 'gluestreaming'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#name GlueSession#name}

---

##### `pythonVersion`<sup>Optional</sup> <a name="pythonVersion" id="@cdktn/provider-awscc.glueSession.GlueSessionCommand.property.pythonVersion"></a>

```java
public java.lang.String getPythonVersion();
```

- *Type:* java.lang.String

Specifies the Python version. The Python version indicates the version supported for jobs of type Spark.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#python_version GlueSession#python_version}

---

### GlueSessionConfig <a name="GlueSessionConfig" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_session.GlueSessionConfig;

GlueSessionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .command(GlueSessionCommand)
    .role(java.lang.String)
    .sessionId(java.lang.String)
//  .connections(GlueSessionConnections)
//  .defaultArguments(java.util.Map<java.lang.String, java.lang.String>)
//  .description(java.lang.String)
//  .glueVersion(java.lang.String)
//  .idleTimeout(java.lang.Number)
//  .maxCapacity(java.lang.Number)
//  .numberOfWorkers(java.lang.Number)
//  .requestOrigin(java.lang.String)
//  .securityConfiguration(java.lang.String)
//  .tags(IResolvable|java.util.List<GlueSessionTags>)
//  .timeout(java.lang.Number)
//  .workerType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.command">command</a></code> | <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommand">GlueSessionCommand</a></code> | The SessionCommand that runs the job. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.role">role</a></code> | <code>java.lang.String</code> | The IAM Role ARN. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.sessionId">sessionId</a></code> | <code>java.lang.String</code> | The ID of the session. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.connections">connections</a></code> | <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnections">GlueSessionConnections</a></code> | Specifies the connections used by the session. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.defaultArguments">defaultArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map array of key-value pairs. Max is 75 pairs. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the session. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.glueVersion">glueVersion</a></code> | <code>java.lang.String</code> | The Glue version determines the versions of Apache Spark and Python that Glue supports. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.idleTimeout">idleTimeout</a></code> | <code>java.lang.Number</code> | The number of minutes when idle before session times out. Default is the value of Timeout. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | The number of Glue data processing units (DPUs) that can be allocated when the job runs. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.numberOfWorkers">numberOfWorkers</a></code> | <code>java.lang.Number</code> | The number of workers of a defined WorkerType to use for the session. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.requestOrigin">requestOrigin</a></code> | <code>java.lang.String</code> | The origin of the request. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.securityConfiguration">securityConfiguration</a></code> | <code>java.lang.String</code> | The name of the SecurityConfiguration structure to be used with the session. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueSession.GlueSessionTags">GlueSessionTags</a>></code> | The tags belonging to the session. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | The number of minutes before session times out. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.workerType">workerType</a></code> | <code>java.lang.String</code> | The type of predefined worker that is allocated when a session runs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.command"></a>

```java
public GlueSessionCommand getCommand();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommand">GlueSessionCommand</a>

The SessionCommand that runs the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#command GlueSession#command}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

The IAM Role ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#role GlueSession#role}

---

##### `sessionId`<sup>Required</sup> <a name="sessionId" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.sessionId"></a>

```java
public java.lang.String getSessionId();
```

- *Type:* java.lang.String

The ID of the session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#session_id GlueSession#session_id}

---

##### `connections`<sup>Optional</sup> <a name="connections" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.connections"></a>

```java
public GlueSessionConnections getConnections();
```

- *Type:* <a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnections">GlueSessionConnections</a>

Specifies the connections used by the session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#connections GlueSession#connections}

---

##### `defaultArguments`<sup>Optional</sup> <a name="defaultArguments" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.defaultArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefaultArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map array of key-value pairs. Max is 75 pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#default_arguments GlueSession#default_arguments}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#description GlueSession#description}

---

##### `glueVersion`<sup>Optional</sup> <a name="glueVersion" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.glueVersion"></a>

```java
public java.lang.String getGlueVersion();
```

- *Type:* java.lang.String

The Glue version determines the versions of Apache Spark and Python that Glue supports.

The GlueVersion must be greater than 2.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#glue_version GlueSession#glue_version}

---

##### `idleTimeout`<sup>Optional</sup> <a name="idleTimeout" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.idleTimeout"></a>

```java
public java.lang.Number getIdleTimeout();
```

- *Type:* java.lang.Number

The number of minutes when idle before session times out. Default is the value of Timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#idle_timeout GlueSession#idle_timeout}

---

##### `maxCapacity`<sup>Optional</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

The number of Glue data processing units (DPUs) that can be allocated when the job runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#max_capacity GlueSession#max_capacity}

---

##### `numberOfWorkers`<sup>Optional</sup> <a name="numberOfWorkers" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.numberOfWorkers"></a>

```java
public java.lang.Number getNumberOfWorkers();
```

- *Type:* java.lang.Number

The number of workers of a defined WorkerType to use for the session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#number_of_workers GlueSession#number_of_workers}

---

##### `requestOrigin`<sup>Optional</sup> <a name="requestOrigin" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.requestOrigin"></a>

```java
public java.lang.String getRequestOrigin();
```

- *Type:* java.lang.String

The origin of the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#request_origin GlueSession#request_origin}

---

##### `securityConfiguration`<sup>Optional</sup> <a name="securityConfiguration" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.securityConfiguration"></a>

```java
public java.lang.String getSecurityConfiguration();
```

- *Type:* java.lang.String

The name of the SecurityConfiguration structure to be used with the session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#security_configuration GlueSession#security_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.tags"></a>

```java
public IResolvable|java.util.List<GlueSessionTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueSession.GlueSessionTags">GlueSessionTags</a>>

The tags belonging to the session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#tags GlueSession#tags}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

The number of minutes before session times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#timeout GlueSession#timeout}

---

##### `workerType`<sup>Optional</sup> <a name="workerType" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.workerType"></a>

```java
public java.lang.String getWorkerType();
```

- *Type:* java.lang.String

The type of predefined worker that is allocated when a session runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#worker_type GlueSession#worker_type}

---

### GlueSessionConnections <a name="GlueSessionConnections" id="@cdktn/provider-awscc.glueSession.GlueSessionConnections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueSession.GlueSessionConnections.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_session.GlueSessionConnections;

GlueSessionConnections.builder()
//  .connections(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnections.property.connections">connections</a></code> | <code>java.util.List<java.lang.String></code> | A list of connection names used by the session. |

---

##### `connections`<sup>Optional</sup> <a name="connections" id="@cdktn/provider-awscc.glueSession.GlueSessionConnections.property.connections"></a>

```java
public java.util.List<java.lang.String> getConnections();
```

- *Type:* java.util.List<java.lang.String>

A list of connection names used by the session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#connections GlueSession#connections}

---

### GlueSessionTags <a name="GlueSessionTags" id="@cdktn/provider-awscc.glueSession.GlueSessionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueSession.GlueSessionTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_session.GlueSessionTags;

GlueSessionTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.glueSession.GlueSessionTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#key GlueSession#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.glueSession.GlueSessionTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#value GlueSession#value}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueSessionCommandOutputReference <a name="GlueSessionCommandOutputReference" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_session.GlueSessionCommandOutputReference;

new GlueSessionCommandOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.resetPythonVersion">resetPythonVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPythonVersion` <a name="resetPythonVersion" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.resetPythonVersion"></a>

```java
public void resetPythonVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.property.pythonVersionInput">pythonVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.property.pythonVersion">pythonVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommand">GlueSessionCommand</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pythonVersionInput`<sup>Optional</sup> <a name="pythonVersionInput" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.property.pythonVersionInput"></a>

```java
public java.lang.String getPythonVersionInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pythonVersion`<sup>Required</sup> <a name="pythonVersion" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.property.pythonVersion"></a>

```java
public java.lang.String getPythonVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueSessionCommand getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommand">GlueSessionCommand</a>

---


### GlueSessionConnectionsOutputReference <a name="GlueSessionConnectionsOutputReference" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_session.GlueSessionConnectionsOutputReference;

new GlueSessionConnectionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.resetConnections">resetConnections</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnections` <a name="resetConnections" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.resetConnections"></a>

```java
public void resetConnections()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.property.connectionsInput">connectionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.property.connections">connections</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnections">GlueSessionConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionsInput`<sup>Optional</sup> <a name="connectionsInput" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.property.connectionsInput"></a>

```java
public java.util.List<java.lang.String> getConnectionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.property.connections"></a>

```java
public java.util.List<java.lang.String> getConnections();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueSessionConnections getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnections">GlueSessionConnections</a>

---


### GlueSessionTagsList <a name="GlueSessionTagsList" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_session.GlueSessionTagsList;

new GlueSessionTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsList.get"></a>

```java
public GlueSessionTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.glueSession.GlueSessionTags">GlueSessionTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GlueSessionTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.glueSession.GlueSessionTags">GlueSessionTags</a>>

---


### GlueSessionTagsOutputReference <a name="GlueSessionTagsOutputReference" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.glue_session.GlueSessionTagsOutputReference;

new GlueSessionTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.glueSession.GlueSessionTags">GlueSessionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|GlueSessionTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.glueSession.GlueSessionTags">GlueSessionTags</a>

---



