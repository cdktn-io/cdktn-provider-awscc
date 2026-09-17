# `neptunegraphGraph` Submodule <a name="`neptunegraphGraph` Submodule" id="@cdktn/provider-awscc.neptunegraphGraph"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NeptunegraphGraph <a name="NeptunegraphGraph" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph awscc_neptunegraph_graph}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer"></a>

```java
import io.cdktn.providers.awscc.neptunegraph_graph.NeptunegraphGraph;

NeptunegraphGraph.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .provisionedMemory(java.lang.Number)
//  .deletionProtection(java.lang.Boolean|IResolvable)
//  .graphName(java.lang.String)
//  .importTask(NeptunegraphGraphImportTask)
//  .kmsKeyIdentifier(java.lang.String)
//  .publicConnectivity(java.lang.Boolean|IResolvable)
//  .replicaCount(java.lang.Number)
//  .tags(IResolvable|java.util.List<NeptunegraphGraphTags>)
//  .vectorSearchConfiguration(NeptunegraphGraphVectorSearchConfiguration)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.provisionedMemory">provisionedMemory</a></code> | <code>java.lang.Number</code> | Memory for the Graph. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Value that indicates whether the Graph has deletion protection enabled. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.graphName">graphName</a></code> | <code>java.lang.String</code> | Contains a user-supplied name for the Graph. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.importTask">importTask</a></code> | <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask">NeptunegraphGraphImportTask</a></code> | The details of the import task to use to create the graph. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.kmsKeyIdentifier">kmsKeyIdentifier</a></code> | <code>java.lang.String</code> | The ARN of the KMS key used to encrypt data in the Neptune Analytics graph. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.publicConnectivity">publicConnectivity</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the Graph can be reached over the internet. Access to all graphs requires IAM authentication. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.replicaCount">replicaCount</a></code> | <code>java.lang.Number</code> | Specifies the number of replicas you want when finished. All replicas will be provisioned in different availability zones. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags">NeptunegraphGraphTags</a>></code> | The tags associated with this graph. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.vectorSearchConfiguration">vectorSearchConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a></code> | Vector Search Configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `provisionedMemory`<sup>Required</sup> <a name="provisionedMemory" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.provisionedMemory"></a>

- *Type:* java.lang.Number

Memory for the Graph.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#provisioned_memory NeptunegraphGraph#provisioned_memory}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.deletionProtection"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Value that indicates whether the Graph has deletion protection enabled.

The graph can't be deleted when deletion protection is enabled.

*Default*: If not specified, the default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#deletion_protection NeptunegraphGraph#deletion_protection}

---

##### `graphName`<sup>Optional</sup> <a name="graphName" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.graphName"></a>

- *Type:* java.lang.String

Contains a user-supplied name for the Graph.

If you don't specify a name, we generate a unique Graph Name using a combination of Stack Name and a UUID comprising of 4 characters.

*Important*: If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#graph_name NeptunegraphGraph#graph_name}

---

##### `importTask`<sup>Optional</sup> <a name="importTask" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.importTask"></a>

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask">NeptunegraphGraphImportTask</a>

The details of the import task to use to create the graph.

When specified, the graph is created using CreateGraphUsingImportTask and data is imported from the supplied source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#import_task NeptunegraphGraph#import_task}

---

##### `kmsKeyIdentifier`<sup>Optional</sup> <a name="kmsKeyIdentifier" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.kmsKeyIdentifier"></a>

- *Type:* java.lang.String

The ARN of the KMS key used to encrypt data in the Neptune Analytics graph.

If not specified, the graph is encrypted with an AWS managed key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#kms_key_identifier NeptunegraphGraph#kms_key_identifier}

---

##### `publicConnectivity`<sup>Optional</sup> <a name="publicConnectivity" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.publicConnectivity"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the Graph can be reached over the internet. Access to all graphs requires IAM authentication.

When the Graph is publicly reachable, its Domain Name System (DNS) endpoint resolves to the public IP address from the internet.

When the Graph isn't publicly reachable, you need to create a PrivateGraphEndpoint in a given VPC to ensure the DNS name resolves to a private IP address that is reachable from the VPC.

*Default*: If not specified, the default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#public_connectivity NeptunegraphGraph#public_connectivity}

---

##### `replicaCount`<sup>Optional</sup> <a name="replicaCount" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.replicaCount"></a>

- *Type:* java.lang.Number

Specifies the number of replicas you want when finished. All replicas will be provisioned in different availability zones.

Replica Count should always be less than or equal to 2.

*Default*: If not specified, the default value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#replica_count NeptunegraphGraph#replica_count}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags">NeptunegraphGraphTags</a>>

The tags associated with this graph.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#tags NeptunegraphGraph#tags}

---

##### `vectorSearchConfiguration`<sup>Optional</sup> <a name="vectorSearchConfiguration" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.vectorSearchConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a>

Vector Search Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#vector_search_configuration NeptunegraphGraph#vector_search_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.putImportTask">putImportTask</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.putVectorSearchConfiguration">putVectorSearchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetGraphName">resetGraphName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetImportTask">resetImportTask</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetKmsKeyIdentifier">resetKmsKeyIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetPublicConnectivity">resetPublicConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetReplicaCount">resetReplicaCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetVectorSearchConfiguration">resetVectorSearchConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putImportTask` <a name="putImportTask" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.putImportTask"></a>

```java
public void putImportTask(NeptunegraphGraphImportTask value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.putImportTask.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask">NeptunegraphGraphImportTask</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<NeptunegraphGraphTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags">NeptunegraphGraphTags</a>>

---

##### `putVectorSearchConfiguration` <a name="putVectorSearchConfiguration" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.putVectorSearchConfiguration"></a>

```java
public void putVectorSearchConfiguration(NeptunegraphGraphVectorSearchConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.putVectorSearchConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a>

---

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetDeletionProtection"></a>

```java
public void resetDeletionProtection()
```

##### `resetGraphName` <a name="resetGraphName" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetGraphName"></a>

```java
public void resetGraphName()
```

##### `resetImportTask` <a name="resetImportTask" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetImportTask"></a>

```java
public void resetImportTask()
```

##### `resetKmsKeyIdentifier` <a name="resetKmsKeyIdentifier" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetKmsKeyIdentifier"></a>

```java
public void resetKmsKeyIdentifier()
```

##### `resetPublicConnectivity` <a name="resetPublicConnectivity" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetPublicConnectivity"></a>

```java
public void resetPublicConnectivity()
```

##### `resetReplicaCount` <a name="resetReplicaCount" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetReplicaCount"></a>

```java
public void resetReplicaCount()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetTags"></a>

```java
public void resetTags()
```

##### `resetVectorSearchConfiguration` <a name="resetVectorSearchConfiguration" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetVectorSearchConfiguration"></a>

```java
public void resetVectorSearchConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NeptunegraphGraph resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.isConstruct"></a>

```java
import io.cdktn.providers.awscc.neptunegraph_graph.NeptunegraphGraph;

NeptunegraphGraph.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.neptunegraph_graph.NeptunegraphGraph;

NeptunegraphGraph.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.neptunegraph_graph.NeptunegraphGraph;

NeptunegraphGraph.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.neptunegraph_graph.NeptunegraphGraph;

NeptunegraphGraph.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NeptunegraphGraph.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NeptunegraphGraph resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NeptunegraphGraph to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NeptunegraphGraph that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NeptunegraphGraph to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.graphArn">graphArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.graphId">graphId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.importTask">importTask</a></code> | <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference">NeptunegraphGraphImportTaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList">NeptunegraphGraphTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.vectorSearchConfiguration">vectorSearchConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference">NeptunegraphGraphVectorSearchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.graphNameInput">graphNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.importTaskInput">importTaskInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask">NeptunegraphGraphImportTask</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.kmsKeyIdentifierInput">kmsKeyIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.provisionedMemoryInput">provisionedMemoryInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.publicConnectivityInput">publicConnectivityInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.replicaCountInput">replicaCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags">NeptunegraphGraphTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.vectorSearchConfigurationInput">vectorSearchConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.graphName">graphName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.kmsKeyIdentifier">kmsKeyIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.provisionedMemory">provisionedMemory</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.publicConnectivity">publicConnectivity</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.replicaCount">replicaCount</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `graphArn`<sup>Required</sup> <a name="graphArn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.graphArn"></a>

```java
public java.lang.String getGraphArn();
```

- *Type:* java.lang.String

---

##### `graphId`<sup>Required</sup> <a name="graphId" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.graphId"></a>

```java
public java.lang.String getGraphId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `importTask`<sup>Required</sup> <a name="importTask" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.importTask"></a>

```java
public NeptunegraphGraphImportTaskOutputReference getImportTask();
```

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference">NeptunegraphGraphImportTaskOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.tags"></a>

```java
public NeptunegraphGraphTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList">NeptunegraphGraphTagsList</a>

---

##### `vectorSearchConfiguration`<sup>Required</sup> <a name="vectorSearchConfiguration" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.vectorSearchConfiguration"></a>

```java
public NeptunegraphGraphVectorSearchConfigurationOutputReference getVectorSearchConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference">NeptunegraphGraphVectorSearchConfigurationOutputReference</a>

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.deletionProtectionInput"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtectionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `graphNameInput`<sup>Optional</sup> <a name="graphNameInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.graphNameInput"></a>

```java
public java.lang.String getGraphNameInput();
```

- *Type:* java.lang.String

---

##### `importTaskInput`<sup>Optional</sup> <a name="importTaskInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.importTaskInput"></a>

```java
public IResolvable|NeptunegraphGraphImportTask getImportTaskInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask">NeptunegraphGraphImportTask</a>

---

##### `kmsKeyIdentifierInput`<sup>Optional</sup> <a name="kmsKeyIdentifierInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.kmsKeyIdentifierInput"></a>

```java
public java.lang.String getKmsKeyIdentifierInput();
```

- *Type:* java.lang.String

---

##### `provisionedMemoryInput`<sup>Optional</sup> <a name="provisionedMemoryInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.provisionedMemoryInput"></a>

```java
public java.lang.Number getProvisionedMemoryInput();
```

- *Type:* java.lang.Number

---

##### `publicConnectivityInput`<sup>Optional</sup> <a name="publicConnectivityInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.publicConnectivityInput"></a>

```java
public java.lang.Boolean|IResolvable getPublicConnectivityInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `replicaCountInput`<sup>Optional</sup> <a name="replicaCountInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.replicaCountInput"></a>

```java
public java.lang.Number getReplicaCountInput();
```

- *Type:* java.lang.Number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.tagsInput"></a>

```java
public IResolvable|java.util.List<NeptunegraphGraphTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags">NeptunegraphGraphTags</a>>

---

##### `vectorSearchConfigurationInput`<sup>Optional</sup> <a name="vectorSearchConfigurationInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.vectorSearchConfigurationInput"></a>

```java
public IResolvable|NeptunegraphGraphVectorSearchConfiguration getVectorSearchConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a>

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.deletionProtection"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `graphName`<sup>Required</sup> <a name="graphName" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.graphName"></a>

```java
public java.lang.String getGraphName();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdentifier`<sup>Required</sup> <a name="kmsKeyIdentifier" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.kmsKeyIdentifier"></a>

```java
public java.lang.String getKmsKeyIdentifier();
```

- *Type:* java.lang.String

---

##### `provisionedMemory`<sup>Required</sup> <a name="provisionedMemory" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.provisionedMemory"></a>

```java
public java.lang.Number getProvisionedMemory();
```

- *Type:* java.lang.Number

---

##### `publicConnectivity`<sup>Required</sup> <a name="publicConnectivity" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.publicConnectivity"></a>

```java
public java.lang.Boolean|IResolvable getPublicConnectivity();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `replicaCount`<sup>Required</sup> <a name="replicaCount" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.replicaCount"></a>

```java
public java.lang.Number getReplicaCount();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NeptunegraphGraphConfig <a name="NeptunegraphGraphConfig" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.neptunegraph_graph.NeptunegraphGraphConfig;

NeptunegraphGraphConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .provisionedMemory(java.lang.Number)
//  .deletionProtection(java.lang.Boolean|IResolvable)
//  .graphName(java.lang.String)
//  .importTask(NeptunegraphGraphImportTask)
//  .kmsKeyIdentifier(java.lang.String)
//  .publicConnectivity(java.lang.Boolean|IResolvable)
//  .replicaCount(java.lang.Number)
//  .tags(IResolvable|java.util.List<NeptunegraphGraphTags>)
//  .vectorSearchConfiguration(NeptunegraphGraphVectorSearchConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.provisionedMemory">provisionedMemory</a></code> | <code>java.lang.Number</code> | Memory for the Graph. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Value that indicates whether the Graph has deletion protection enabled. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.graphName">graphName</a></code> | <code>java.lang.String</code> | Contains a user-supplied name for the Graph. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.importTask">importTask</a></code> | <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask">NeptunegraphGraphImportTask</a></code> | The details of the import task to use to create the graph. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.kmsKeyIdentifier">kmsKeyIdentifier</a></code> | <code>java.lang.String</code> | The ARN of the KMS key used to encrypt data in the Neptune Analytics graph. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.publicConnectivity">publicConnectivity</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the Graph can be reached over the internet. Access to all graphs requires IAM authentication. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.replicaCount">replicaCount</a></code> | <code>java.lang.Number</code> | Specifies the number of replicas you want when finished. All replicas will be provisioned in different availability zones. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags">NeptunegraphGraphTags</a>></code> | The tags associated with this graph. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.vectorSearchConfiguration">vectorSearchConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a></code> | Vector Search Configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `provisionedMemory`<sup>Required</sup> <a name="provisionedMemory" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.provisionedMemory"></a>

```java
public java.lang.Number getProvisionedMemory();
```

- *Type:* java.lang.Number

Memory for the Graph.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#provisioned_memory NeptunegraphGraph#provisioned_memory}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.deletionProtection"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Value that indicates whether the Graph has deletion protection enabled.

The graph can't be deleted when deletion protection is enabled.

*Default*: If not specified, the default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#deletion_protection NeptunegraphGraph#deletion_protection}

---

##### `graphName`<sup>Optional</sup> <a name="graphName" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.graphName"></a>

```java
public java.lang.String getGraphName();
```

- *Type:* java.lang.String

Contains a user-supplied name for the Graph.

If you don't specify a name, we generate a unique Graph Name using a combination of Stack Name and a UUID comprising of 4 characters.

*Important*: If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#graph_name NeptunegraphGraph#graph_name}

---

##### `importTask`<sup>Optional</sup> <a name="importTask" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.importTask"></a>

```java
public NeptunegraphGraphImportTask getImportTask();
```

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask">NeptunegraphGraphImportTask</a>

The details of the import task to use to create the graph.

When specified, the graph is created using CreateGraphUsingImportTask and data is imported from the supplied source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#import_task NeptunegraphGraph#import_task}

---

##### `kmsKeyIdentifier`<sup>Optional</sup> <a name="kmsKeyIdentifier" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.kmsKeyIdentifier"></a>

```java
public java.lang.String getKmsKeyIdentifier();
```

- *Type:* java.lang.String

The ARN of the KMS key used to encrypt data in the Neptune Analytics graph.

If not specified, the graph is encrypted with an AWS managed key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#kms_key_identifier NeptunegraphGraph#kms_key_identifier}

---

##### `publicConnectivity`<sup>Optional</sup> <a name="publicConnectivity" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.publicConnectivity"></a>

```java
public java.lang.Boolean|IResolvable getPublicConnectivity();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the Graph can be reached over the internet. Access to all graphs requires IAM authentication.

When the Graph is publicly reachable, its Domain Name System (DNS) endpoint resolves to the public IP address from the internet.

When the Graph isn't publicly reachable, you need to create a PrivateGraphEndpoint in a given VPC to ensure the DNS name resolves to a private IP address that is reachable from the VPC.

*Default*: If not specified, the default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#public_connectivity NeptunegraphGraph#public_connectivity}

---

##### `replicaCount`<sup>Optional</sup> <a name="replicaCount" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.replicaCount"></a>

```java
public java.lang.Number getReplicaCount();
```

- *Type:* java.lang.Number

Specifies the number of replicas you want when finished. All replicas will be provisioned in different availability zones.

Replica Count should always be less than or equal to 2.

*Default*: If not specified, the default value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#replica_count NeptunegraphGraph#replica_count}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.tags"></a>

```java
public IResolvable|java.util.List<NeptunegraphGraphTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags">NeptunegraphGraphTags</a>>

The tags associated with this graph.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#tags NeptunegraphGraph#tags}

---

##### `vectorSearchConfiguration`<sup>Optional</sup> <a name="vectorSearchConfiguration" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.vectorSearchConfiguration"></a>

```java
public NeptunegraphGraphVectorSearchConfiguration getVectorSearchConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a>

Vector Search Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#vector_search_configuration NeptunegraphGraph#vector_search_configuration}

---

### NeptunegraphGraphImportTask <a name="NeptunegraphGraphImportTask" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.Initializer"></a>

```java
import io.cdktn.providers.awscc.neptunegraph_graph.NeptunegraphGraphImportTask;

NeptunegraphGraphImportTask.builder()
//  .blankNodeHandling(java.lang.String)
//  .failOnError(java.lang.Boolean|IResolvable)
//  .format(java.lang.String)
//  .importOptions(NeptunegraphGraphImportTaskImportOptions)
//  .maxProvisionedMemory(java.lang.Number)
//  .minProvisionedMemory(java.lang.Number)
//  .parquetType(java.lang.String)
//  .roleArn(java.lang.String)
//  .source(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.blankNodeHandling">blankNodeHandling</a></code> | <code>java.lang.String</code> | The method to handle blank nodes in the dataset. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.failOnError">failOnError</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set to true, the task halts when an import error is encountered. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.format">format</a></code> | <code>java.lang.String</code> | Specifies the format of S3 data to be imported. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.importOptions">importOptions</a></code> | <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptions">NeptunegraphGraphImportTaskImportOptions</a></code> | Contains options for controlling the import process. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.maxProvisionedMemory">maxProvisionedMemory</a></code> | <code>java.lang.Number</code> | The maximum provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.minProvisionedMemory">minProvisionedMemory</a></code> | <code>java.lang.Number</code> | The minimum provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph. Default: 16. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.parquetType">parquetType</a></code> | <code>java.lang.String</code> | The parquet type of the import task. Required when Format is PARQUET. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The ARN of the IAM role that will allow access to the data that is to be imported. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.source">source</a></code> | <code>java.lang.String</code> | A URL identifying to the location of the data to be imported. |

---

##### `blankNodeHandling`<sup>Optional</sup> <a name="blankNodeHandling" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.blankNodeHandling"></a>

```java
public java.lang.String getBlankNodeHandling();
```

- *Type:* java.lang.String

The method to handle blank nodes in the dataset.

Currently, only convertToIri is supported, meaning blank nodes are converted to unique IRIs at load time. Must be provided when format is NTRIPLES

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#blank_node_handling NeptunegraphGraph#blank_node_handling}

---

##### `failOnError`<sup>Optional</sup> <a name="failOnError" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.failOnError"></a>

```java
public java.lang.Boolean|IResolvable getFailOnError();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set to true, the task halts when an import error is encountered.

If set to false, the task skips the data that caused the error and continues if possible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#fail_on_error NeptunegraphGraph#fail_on_error}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

Specifies the format of S3 data to be imported.

Valid values are CSV, which identifies the Gremlin CSV format, OPEN_CYPHER, which identifies the openCypher load format, or NTRIPLES, which identifies the RDF n-triples format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#format NeptunegraphGraph#format}

---

##### `importOptions`<sup>Optional</sup> <a name="importOptions" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.importOptions"></a>

```java
public NeptunegraphGraphImportTaskImportOptions getImportOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptions">NeptunegraphGraphImportTaskImportOptions</a>

Contains options for controlling the import process.

For example, if the failOnError key is set to false, the import skips the data that caused the error and continues if possible (whereas if set to true, the default, or if omitted, the import operation halts immediately when an error is encountered).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#import_options NeptunegraphGraph#import_options}

---

##### `maxProvisionedMemory`<sup>Optional</sup> <a name="maxProvisionedMemory" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.maxProvisionedMemory"></a>

```java
public java.lang.Number getMaxProvisionedMemory();
```

- *Type:* java.lang.Number

The maximum provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph.

Default: 1024, or the approved upper limit for your account. If both the minimum and maximum values are specified, the final provisioned-memory will be chosen per the actual size of your imported data. If neither value is specified, 128 m-NCUs are used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#max_provisioned_memory NeptunegraphGraph#max_provisioned_memory}

---

##### `minProvisionedMemory`<sup>Optional</sup> <a name="minProvisionedMemory" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.minProvisionedMemory"></a>

```java
public java.lang.Number getMinProvisionedMemory();
```

- *Type:* java.lang.Number

The minimum provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph. Default: 16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#min_provisioned_memory NeptunegraphGraph#min_provisioned_memory}

---

##### `parquetType`<sup>Optional</sup> <a name="parquetType" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.parquetType"></a>

```java
public java.lang.String getParquetType();
```

- *Type:* java.lang.String

The parquet type of the import task. Required when Format is PARQUET.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#parquet_type NeptunegraphGraph#parquet_type}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The ARN of the IAM role that will allow access to the data that is to be imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#role_arn NeptunegraphGraph#role_arn}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

A URL identifying to the location of the data to be imported.

This can be an Amazon S3 path, or can point to a Neptune database endpoint or snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#source NeptunegraphGraph#source}

---

### NeptunegraphGraphImportTaskImportOptions <a name="NeptunegraphGraphImportTaskImportOptions" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.neptunegraph_graph.NeptunegraphGraphImportTaskImportOptions;

NeptunegraphGraphImportTaskImportOptions.builder()
//  .neptune(NeptunegraphGraphImportTaskImportOptionsNeptune)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptions.property.neptune">neptune</a></code> | <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune">NeptunegraphGraphImportTaskImportOptionsNeptune</a></code> | Options for importing data from a Neptune database. |

---

##### `neptune`<sup>Optional</sup> <a name="neptune" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptions.property.neptune"></a>

```java
public NeptunegraphGraphImportTaskImportOptionsNeptune getNeptune();
```

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune">NeptunegraphGraphImportTaskImportOptionsNeptune</a>

Options for importing data from a Neptune database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#neptune NeptunegraphGraph#neptune}

---

### NeptunegraphGraphImportTaskImportOptionsNeptune <a name="NeptunegraphGraphImportTaskImportOptionsNeptune" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune.Initializer"></a>

```java
import io.cdktn.providers.awscc.neptunegraph_graph.NeptunegraphGraphImportTaskImportOptionsNeptune;

NeptunegraphGraphImportTaskImportOptionsNeptune.builder()
//  .preserveDefaultVertexLabels(java.lang.Boolean|IResolvable)
//  .preserveEdgeIds(java.lang.Boolean|IResolvable)
//  .s3ExportKmsKeyId(java.lang.String)
//  .s3ExportPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune.property.preserveDefaultVertexLabels">preserveDefaultVertexLabels</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Neptune Analytics supports label-less vertices and no labels are assigned unless one is explicitly provided. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune.property.preserveEdgeIds">preserveEdgeIds</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Neptune Analytics currently does not support user defined edge ids. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune.property.s3ExportKmsKeyId">s3ExportKmsKeyId</a></code> | <code>java.lang.String</code> | The KMS key to use to encrypt data in the S3 bucket where the graph data is exported. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune.property.s3ExportPath">s3ExportPath</a></code> | <code>java.lang.String</code> | The path to an S3 bucket from which to import data. |

---

##### `preserveDefaultVertexLabels`<sup>Optional</sup> <a name="preserveDefaultVertexLabels" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune.property.preserveDefaultVertexLabels"></a>

```java
public java.lang.Boolean|IResolvable getPreserveDefaultVertexLabels();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Neptune Analytics supports label-less vertices and no labels are assigned unless one is explicitly provided.

Neptune assigns default labels when none is explicitly provided. When importing the data into Neptune Analytics, the default vertex labels can be omitted by setting preserveDefaultVertexLabels to false. Note that if the vertex only has default labels, and has no other properties or edges, then the vertex will effectively not get imported into Neptune Analytics when preserveDefaultVertexLabels is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#preserve_default_vertex_labels NeptunegraphGraph#preserve_default_vertex_labels}

---

##### `preserveEdgeIds`<sup>Optional</sup> <a name="preserveEdgeIds" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune.property.preserveEdgeIds"></a>

```java
public java.lang.Boolean|IResolvable getPreserveEdgeIds();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Neptune Analytics currently does not support user defined edge ids.

The edge ids are not imported by default. They are imported if preserveEdgeIds is set to true, and ids are stored as properties on the relationships with the property name neptuneEdgeId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#preserve_edge_ids NeptunegraphGraph#preserve_edge_ids}

---

##### `s3ExportKmsKeyId`<sup>Optional</sup> <a name="s3ExportKmsKeyId" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune.property.s3ExportKmsKeyId"></a>

```java
public java.lang.String getS3ExportKmsKeyId();
```

- *Type:* java.lang.String

The KMS key to use to encrypt data in the S3 bucket where the graph data is exported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#s3_export_kms_key_id NeptunegraphGraph#s3_export_kms_key_id}

---

##### `s3ExportPath`<sup>Optional</sup> <a name="s3ExportPath" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune.property.s3ExportPath"></a>

```java
public java.lang.String getS3ExportPath();
```

- *Type:* java.lang.String

The path to an S3 bucket from which to import data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#s3_export_path NeptunegraphGraph#s3_export_path}

---

### NeptunegraphGraphTags <a name="NeptunegraphGraphTags" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.neptunegraph_graph.NeptunegraphGraphTags;

NeptunegraphGraphTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#key NeptunegraphGraph#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#value NeptunegraphGraph#value}

---

### NeptunegraphGraphVectorSearchConfiguration <a name="NeptunegraphGraphVectorSearchConfiguration" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.neptunegraph_graph.NeptunegraphGraphVectorSearchConfiguration;

NeptunegraphGraphVectorSearchConfiguration.builder()
//  .vectorSearchDimension(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration.property.vectorSearchDimension">vectorSearchDimension</a></code> | <code>java.lang.Number</code> | The vector search dimension. |

---

##### `vectorSearchDimension`<sup>Optional</sup> <a name="vectorSearchDimension" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration.property.vectorSearchDimension"></a>

```java
public java.lang.Number getVectorSearchDimension();
```

- *Type:* java.lang.Number

The vector search dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#vector_search_dimension NeptunegraphGraph#vector_search_dimension}

---

## Classes <a name="Classes" id="Classes"></a>

### NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference <a name="NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.neptunegraph_graph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference;

new NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resetPreserveDefaultVertexLabels">resetPreserveDefaultVertexLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resetPreserveEdgeIds">resetPreserveEdgeIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resetS3ExportKmsKeyId">resetS3ExportKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resetS3ExportPath">resetS3ExportPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPreserveDefaultVertexLabels` <a name="resetPreserveDefaultVertexLabels" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resetPreserveDefaultVertexLabels"></a>

```java
public void resetPreserveDefaultVertexLabels()
```

##### `resetPreserveEdgeIds` <a name="resetPreserveEdgeIds" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resetPreserveEdgeIds"></a>

```java
public void resetPreserveEdgeIds()
```

##### `resetS3ExportKmsKeyId` <a name="resetS3ExportKmsKeyId" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resetS3ExportKmsKeyId"></a>

```java
public void resetS3ExportKmsKeyId()
```

##### `resetS3ExportPath` <a name="resetS3ExportPath" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resetS3ExportPath"></a>

```java
public void resetS3ExportPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.preserveDefaultVertexLabelsInput">preserveDefaultVertexLabelsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.preserveEdgeIdsInput">preserveEdgeIdsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.s3ExportKmsKeyIdInput">s3ExportKmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.s3ExportPathInput">s3ExportPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.preserveDefaultVertexLabels">preserveDefaultVertexLabels</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.preserveEdgeIds">preserveEdgeIds</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.s3ExportKmsKeyId">s3ExportKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.s3ExportPath">s3ExportPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune">NeptunegraphGraphImportTaskImportOptionsNeptune</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `preserveDefaultVertexLabelsInput`<sup>Optional</sup> <a name="preserveDefaultVertexLabelsInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.preserveDefaultVertexLabelsInput"></a>

```java
public java.lang.Boolean|IResolvable getPreserveDefaultVertexLabelsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `preserveEdgeIdsInput`<sup>Optional</sup> <a name="preserveEdgeIdsInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.preserveEdgeIdsInput"></a>

```java
public java.lang.Boolean|IResolvable getPreserveEdgeIdsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `s3ExportKmsKeyIdInput`<sup>Optional</sup> <a name="s3ExportKmsKeyIdInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.s3ExportKmsKeyIdInput"></a>

```java
public java.lang.String getS3ExportKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `s3ExportPathInput`<sup>Optional</sup> <a name="s3ExportPathInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.s3ExportPathInput"></a>

```java
public java.lang.String getS3ExportPathInput();
```

- *Type:* java.lang.String

---

##### `preserveDefaultVertexLabels`<sup>Required</sup> <a name="preserveDefaultVertexLabels" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.preserveDefaultVertexLabels"></a>

```java
public java.lang.Boolean|IResolvable getPreserveDefaultVertexLabels();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `preserveEdgeIds`<sup>Required</sup> <a name="preserveEdgeIds" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.preserveEdgeIds"></a>

```java
public java.lang.Boolean|IResolvable getPreserveEdgeIds();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `s3ExportKmsKeyId`<sup>Required</sup> <a name="s3ExportKmsKeyId" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.s3ExportKmsKeyId"></a>

```java
public java.lang.String getS3ExportKmsKeyId();
```

- *Type:* java.lang.String

---

##### `s3ExportPath`<sup>Required</sup> <a name="s3ExportPath" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.s3ExportPath"></a>

```java
public java.lang.String getS3ExportPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.internalValue"></a>

```java
public IResolvable|NeptunegraphGraphImportTaskImportOptionsNeptune getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune">NeptunegraphGraphImportTaskImportOptionsNeptune</a>

---


### NeptunegraphGraphImportTaskImportOptionsOutputReference <a name="NeptunegraphGraphImportTaskImportOptionsOutputReference" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.neptunegraph_graph.NeptunegraphGraphImportTaskImportOptionsOutputReference;

new NeptunegraphGraphImportTaskImportOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.putNeptune">putNeptune</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.resetNeptune">resetNeptune</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNeptune` <a name="putNeptune" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.putNeptune"></a>

```java
public void putNeptune(NeptunegraphGraphImportTaskImportOptionsNeptune value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.putNeptune.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune">NeptunegraphGraphImportTaskImportOptionsNeptune</a>

---

##### `resetNeptune` <a name="resetNeptune" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.resetNeptune"></a>

```java
public void resetNeptune()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.property.neptune">neptune</a></code> | <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference">NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.property.neptuneInput">neptuneInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune">NeptunegraphGraphImportTaskImportOptionsNeptune</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptions">NeptunegraphGraphImportTaskImportOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `neptune`<sup>Required</sup> <a name="neptune" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.property.neptune"></a>

```java
public NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference getNeptune();
```

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference">NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference</a>

---

##### `neptuneInput`<sup>Optional</sup> <a name="neptuneInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.property.neptuneInput"></a>

```java
public IResolvable|NeptunegraphGraphImportTaskImportOptionsNeptune getNeptuneInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune">NeptunegraphGraphImportTaskImportOptionsNeptune</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|NeptunegraphGraphImportTaskImportOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptions">NeptunegraphGraphImportTaskImportOptions</a>

---


### NeptunegraphGraphImportTaskOutputReference <a name="NeptunegraphGraphImportTaskOutputReference" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.neptunegraph_graph.NeptunegraphGraphImportTaskOutputReference;

new NeptunegraphGraphImportTaskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.putImportOptions">putImportOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetBlankNodeHandling">resetBlankNodeHandling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetFailOnError">resetFailOnError</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetFormat">resetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetImportOptions">resetImportOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetMaxProvisionedMemory">resetMaxProvisionedMemory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetMinProvisionedMemory">resetMinProvisionedMemory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetParquetType">resetParquetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetSource">resetSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putImportOptions` <a name="putImportOptions" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.putImportOptions"></a>

```java
public void putImportOptions(NeptunegraphGraphImportTaskImportOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.putImportOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptions">NeptunegraphGraphImportTaskImportOptions</a>

---

##### `resetBlankNodeHandling` <a name="resetBlankNodeHandling" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetBlankNodeHandling"></a>

```java
public void resetBlankNodeHandling()
```

##### `resetFailOnError` <a name="resetFailOnError" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetFailOnError"></a>

```java
public void resetFailOnError()
```

##### `resetFormat` <a name="resetFormat" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetFormat"></a>

```java
public void resetFormat()
```

##### `resetImportOptions` <a name="resetImportOptions" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetImportOptions"></a>

```java
public void resetImportOptions()
```

##### `resetMaxProvisionedMemory` <a name="resetMaxProvisionedMemory" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetMaxProvisionedMemory"></a>

```java
public void resetMaxProvisionedMemory()
```

##### `resetMinProvisionedMemory` <a name="resetMinProvisionedMemory" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetMinProvisionedMemory"></a>

```java
public void resetMinProvisionedMemory()
```

##### `resetParquetType` <a name="resetParquetType" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetParquetType"></a>

```java
public void resetParquetType()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetSource"></a>

```java
public void resetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.importOptions">importOptions</a></code> | <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference">NeptunegraphGraphImportTaskImportOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.blankNodeHandlingInput">blankNodeHandlingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.failOnErrorInput">failOnErrorInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.formatInput">formatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.importOptionsInput">importOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptions">NeptunegraphGraphImportTaskImportOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.maxProvisionedMemoryInput">maxProvisionedMemoryInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.minProvisionedMemoryInput">minProvisionedMemoryInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.parquetTypeInput">parquetTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.blankNodeHandling">blankNodeHandling</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.failOnError">failOnError</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.maxProvisionedMemory">maxProvisionedMemory</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.minProvisionedMemory">minProvisionedMemory</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.parquetType">parquetType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask">NeptunegraphGraphImportTask</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `importOptions`<sup>Required</sup> <a name="importOptions" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.importOptions"></a>

```java
public NeptunegraphGraphImportTaskImportOptionsOutputReference getImportOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference">NeptunegraphGraphImportTaskImportOptionsOutputReference</a>

---

##### `blankNodeHandlingInput`<sup>Optional</sup> <a name="blankNodeHandlingInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.blankNodeHandlingInput"></a>

```java
public java.lang.String getBlankNodeHandlingInput();
```

- *Type:* java.lang.String

---

##### `failOnErrorInput`<sup>Optional</sup> <a name="failOnErrorInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.failOnErrorInput"></a>

```java
public java.lang.Boolean|IResolvable getFailOnErrorInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.formatInput"></a>

```java
public java.lang.String getFormatInput();
```

- *Type:* java.lang.String

---

##### `importOptionsInput`<sup>Optional</sup> <a name="importOptionsInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.importOptionsInput"></a>

```java
public IResolvable|NeptunegraphGraphImportTaskImportOptions getImportOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptions">NeptunegraphGraphImportTaskImportOptions</a>

---

##### `maxProvisionedMemoryInput`<sup>Optional</sup> <a name="maxProvisionedMemoryInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.maxProvisionedMemoryInput"></a>

```java
public java.lang.Number getMaxProvisionedMemoryInput();
```

- *Type:* java.lang.Number

---

##### `minProvisionedMemoryInput`<sup>Optional</sup> <a name="minProvisionedMemoryInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.minProvisionedMemoryInput"></a>

```java
public java.lang.Number getMinProvisionedMemoryInput();
```

- *Type:* java.lang.Number

---

##### `parquetTypeInput`<sup>Optional</sup> <a name="parquetTypeInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.parquetTypeInput"></a>

```java
public java.lang.String getParquetTypeInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `blankNodeHandling`<sup>Required</sup> <a name="blankNodeHandling" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.blankNodeHandling"></a>

```java
public java.lang.String getBlankNodeHandling();
```

- *Type:* java.lang.String

---

##### `failOnError`<sup>Required</sup> <a name="failOnError" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.failOnError"></a>

```java
public java.lang.Boolean|IResolvable getFailOnError();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `maxProvisionedMemory`<sup>Required</sup> <a name="maxProvisionedMemory" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.maxProvisionedMemory"></a>

```java
public java.lang.Number getMaxProvisionedMemory();
```

- *Type:* java.lang.Number

---

##### `minProvisionedMemory`<sup>Required</sup> <a name="minProvisionedMemory" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.minProvisionedMemory"></a>

```java
public java.lang.Number getMinProvisionedMemory();
```

- *Type:* java.lang.Number

---

##### `parquetType`<sup>Required</sup> <a name="parquetType" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.parquetType"></a>

```java
public java.lang.String getParquetType();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.internalValue"></a>

```java
public IResolvable|NeptunegraphGraphImportTask getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask">NeptunegraphGraphImportTask</a>

---


### NeptunegraphGraphTagsList <a name="NeptunegraphGraphTagsList" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.neptunegraph_graph.NeptunegraphGraphTagsList;

new NeptunegraphGraphTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.get"></a>

```java
public NeptunegraphGraphTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags">NeptunegraphGraphTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NeptunegraphGraphTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags">NeptunegraphGraphTags</a>>

---


### NeptunegraphGraphTagsOutputReference <a name="NeptunegraphGraphTagsOutputReference" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.neptunegraph_graph.NeptunegraphGraphTagsOutputReference;

new NeptunegraphGraphTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags">NeptunegraphGraphTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|NeptunegraphGraphTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags">NeptunegraphGraphTags</a>

---


### NeptunegraphGraphVectorSearchConfigurationOutputReference <a name="NeptunegraphGraphVectorSearchConfigurationOutputReference" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.neptunegraph_graph.NeptunegraphGraphVectorSearchConfigurationOutputReference;

new NeptunegraphGraphVectorSearchConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.resetVectorSearchDimension">resetVectorSearchDimension</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVectorSearchDimension` <a name="resetVectorSearchDimension" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.resetVectorSearchDimension"></a>

```java
public void resetVectorSearchDimension()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.vectorSearchDimensionInput">vectorSearchDimensionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.vectorSearchDimension">vectorSearchDimension</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vectorSearchDimensionInput`<sup>Optional</sup> <a name="vectorSearchDimensionInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.vectorSearchDimensionInput"></a>

```java
public java.lang.Number getVectorSearchDimensionInput();
```

- *Type:* java.lang.Number

---

##### `vectorSearchDimension`<sup>Required</sup> <a name="vectorSearchDimension" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.vectorSearchDimension"></a>

```java
public java.lang.Number getVectorSearchDimension();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|NeptunegraphGraphVectorSearchConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a>

---



