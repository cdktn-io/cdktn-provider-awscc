# `daxCluster` Submodule <a name="`daxCluster` Submodule" id="@cdktn/provider-awscc.daxCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DaxCluster <a name="DaxCluster" id="@cdktn/provider-awscc.daxCluster.DaxCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster awscc_dax_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer"></a>

```java
import io.cdktn.providers.awscc.dax_cluster.DaxCluster;

DaxCluster.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .iamRoleArn(java.lang.String)
    .nodeType(java.lang.String)
    .replicationFactor(java.lang.Number)
//  .availabilityZones(java.util.List<java.lang.String>)
//  .clusterEndpointEncryptionType(java.lang.String)
//  .clusterName(java.lang.String)
//  .description(java.lang.String)
//  .networkType(java.lang.String)
//  .notificationTopicArn(java.lang.String)
//  .parameterGroupName(java.lang.String)
//  .preferredMaintenanceWindow(java.lang.String)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .sseSpecification(DaxClusterSseSpecification)
//  .subnetGroupName(java.lang.String)
//  .tags(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#iam_role_arn DaxCluster#iam_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.nodeType">nodeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#node_type DaxCluster#node_type}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.replicationFactor">replicationFactor</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#replication_factor DaxCluster#replication_factor}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#availability_zones DaxCluster#availability_zones}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.clusterEndpointEncryptionType">clusterEndpointEncryptionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#cluster_endpoint_encryption_type DaxCluster#cluster_endpoint_encryption_type}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#cluster_name DaxCluster#cluster_name}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#description DaxCluster#description}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.networkType">networkType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#network_type DaxCluster#network_type}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.notificationTopicArn">notificationTopicArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#notification_topic_arn DaxCluster#notification_topic_arn}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.parameterGroupName">parameterGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#parameter_group_name DaxCluster#parameter_group_name}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#preferred_maintenance_window DaxCluster#preferred_maintenance_window}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#security_group_ids DaxCluster#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.sseSpecification">sseSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecification">DaxClusterSseSpecification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#sse_specification DaxCluster#sse_specification}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.subnetGroupName">subnetGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#subnet_group_name DaxCluster#subnet_group_name}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.tags">tags</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#tags DaxCluster#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.iamRoleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#iam_role_arn DaxCluster#iam_role_arn}.

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.nodeType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#node_type DaxCluster#node_type}.

---

##### `replicationFactor`<sup>Required</sup> <a name="replicationFactor" id="@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.replicationFactor"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#replication_factor DaxCluster#replication_factor}.

---

##### `availabilityZones`<sup>Optional</sup> <a name="availabilityZones" id="@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.availabilityZones"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#availability_zones DaxCluster#availability_zones}.

---

##### `clusterEndpointEncryptionType`<sup>Optional</sup> <a name="clusterEndpointEncryptionType" id="@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.clusterEndpointEncryptionType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#cluster_endpoint_encryption_type DaxCluster#cluster_endpoint_encryption_type}.

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.clusterName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#cluster_name DaxCluster#cluster_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#description DaxCluster#description}.

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.networkType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#network_type DaxCluster#network_type}.

---

##### `notificationTopicArn`<sup>Optional</sup> <a name="notificationTopicArn" id="@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.notificationTopicArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#notification_topic_arn DaxCluster#notification_topic_arn}.

---

##### `parameterGroupName`<sup>Optional</sup> <a name="parameterGroupName" id="@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.parameterGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#parameter_group_name DaxCluster#parameter_group_name}.

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.preferredMaintenanceWindow"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#preferred_maintenance_window DaxCluster#preferred_maintenance_window}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.securityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#security_group_ids DaxCluster#security_group_ids}.

---

##### `sseSpecification`<sup>Optional</sup> <a name="sseSpecification" id="@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.sseSpecification"></a>

- *Type:* <a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecification">DaxClusterSseSpecification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#sse_specification DaxCluster#sse_specification}.

---

##### `subnetGroupName`<sup>Optional</sup> <a name="subnetGroupName" id="@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.subnetGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#subnet_group_name DaxCluster#subnet_group_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.daxCluster.DaxCluster.Initializer.parameter.tags"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#tags DaxCluster#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.putSseSpecification">putSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.resetAvailabilityZones">resetAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.resetClusterEndpointEncryptionType">resetClusterEndpointEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.resetClusterName">resetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.resetNetworkType">resetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.resetNotificationTopicArn">resetNotificationTopicArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.resetParameterGroupName">resetParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.resetPreferredMaintenanceWindow">resetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.resetSseSpecification">resetSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.resetSubnetGroupName">resetSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.daxCluster.DaxCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.daxCluster.DaxCluster.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.daxCluster.DaxCluster.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.daxCluster.DaxCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.daxCluster.DaxCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.daxCluster.DaxCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.daxCluster.DaxCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.daxCluster.DaxCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.daxCluster.DaxCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.daxCluster.DaxCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.daxCluster.DaxCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.daxCluster.DaxCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.daxCluster.DaxCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.daxCluster.DaxCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.daxCluster.DaxCluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.daxCluster.DaxCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.daxCluster.DaxCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.daxCluster.DaxCluster.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.daxCluster.DaxCluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.daxCluster.DaxCluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.daxCluster.DaxCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.daxCluster.DaxCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.daxCluster.DaxCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.daxCluster.DaxCluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.daxCluster.DaxCluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSseSpecification` <a name="putSseSpecification" id="@cdktn/provider-awscc.daxCluster.DaxCluster.putSseSpecification"></a>

```java
public void putSseSpecification(DaxClusterSseSpecification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.daxCluster.DaxCluster.putSseSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecification">DaxClusterSseSpecification</a>

---

##### `resetAvailabilityZones` <a name="resetAvailabilityZones" id="@cdktn/provider-awscc.daxCluster.DaxCluster.resetAvailabilityZones"></a>

```java
public void resetAvailabilityZones()
```

##### `resetClusterEndpointEncryptionType` <a name="resetClusterEndpointEncryptionType" id="@cdktn/provider-awscc.daxCluster.DaxCluster.resetClusterEndpointEncryptionType"></a>

```java
public void resetClusterEndpointEncryptionType()
```

##### `resetClusterName` <a name="resetClusterName" id="@cdktn/provider-awscc.daxCluster.DaxCluster.resetClusterName"></a>

```java
public void resetClusterName()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.daxCluster.DaxCluster.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetNetworkType` <a name="resetNetworkType" id="@cdktn/provider-awscc.daxCluster.DaxCluster.resetNetworkType"></a>

```java
public void resetNetworkType()
```

##### `resetNotificationTopicArn` <a name="resetNotificationTopicArn" id="@cdktn/provider-awscc.daxCluster.DaxCluster.resetNotificationTopicArn"></a>

```java
public void resetNotificationTopicArn()
```

##### `resetParameterGroupName` <a name="resetParameterGroupName" id="@cdktn/provider-awscc.daxCluster.DaxCluster.resetParameterGroupName"></a>

```java
public void resetParameterGroupName()
```

##### `resetPreferredMaintenanceWindow` <a name="resetPreferredMaintenanceWindow" id="@cdktn/provider-awscc.daxCluster.DaxCluster.resetPreferredMaintenanceWindow"></a>

```java
public void resetPreferredMaintenanceWindow()
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.daxCluster.DaxCluster.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetSseSpecification` <a name="resetSseSpecification" id="@cdktn/provider-awscc.daxCluster.DaxCluster.resetSseSpecification"></a>

```java
public void resetSseSpecification()
```

##### `resetSubnetGroupName` <a name="resetSubnetGroupName" id="@cdktn/provider-awscc.daxCluster.DaxCluster.resetSubnetGroupName"></a>

```java
public void resetSubnetGroupName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.daxCluster.DaxCluster.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DaxCluster resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.daxCluster.DaxCluster.isConstruct"></a>

```java
import io.cdktn.providers.awscc.dax_cluster.DaxCluster;

DaxCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.daxCluster.DaxCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.daxCluster.DaxCluster.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.dax_cluster.DaxCluster;

DaxCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.daxCluster.DaxCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.daxCluster.DaxCluster.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.dax_cluster.DaxCluster;

DaxCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.daxCluster.DaxCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.daxCluster.DaxCluster.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.dax_cluster.DaxCluster;

DaxCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DaxCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DaxCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.daxCluster.DaxCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.daxCluster.DaxCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DaxCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.daxCluster.DaxCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DaxCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.daxCluster.DaxCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DaxCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.clusterDiscoveryEndpoint">clusterDiscoveryEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.clusterDiscoveryEndpointUrl">clusterDiscoveryEndpointUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.sseSpecification">sseSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference">DaxClusterSseSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.availabilityZonesInput">availabilityZonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.clusterEndpointEncryptionTypeInput">clusterEndpointEncryptionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.clusterNameInput">clusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.iamRoleArnInput">iamRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.networkTypeInput">networkTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.nodeTypeInput">nodeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.notificationTopicArnInput">notificationTopicArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.parameterGroupNameInput">parameterGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.preferredMaintenanceWindowInput">preferredMaintenanceWindowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.replicationFactorInput">replicationFactorInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.sseSpecificationInput">sseSpecificationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecification">DaxClusterSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.subnetGroupNameInput">subnetGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.tagsInput">tagsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.clusterEndpointEncryptionType">clusterEndpointEncryptionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.networkType">networkType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.nodeType">nodeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.notificationTopicArn">notificationTopicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.parameterGroupName">parameterGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.replicationFactor">replicationFactor</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.subnetGroupName">subnetGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.tags">tags</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `clusterDiscoveryEndpoint`<sup>Required</sup> <a name="clusterDiscoveryEndpoint" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.clusterDiscoveryEndpoint"></a>

```java
public java.lang.String getClusterDiscoveryEndpoint();
```

- *Type:* java.lang.String

---

##### `clusterDiscoveryEndpointUrl`<sup>Required</sup> <a name="clusterDiscoveryEndpointUrl" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.clusterDiscoveryEndpointUrl"></a>

```java
public java.lang.String getClusterDiscoveryEndpointUrl();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `sseSpecification`<sup>Required</sup> <a name="sseSpecification" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.sseSpecification"></a>

```java
public DaxClusterSseSpecificationOutputReference getSseSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference">DaxClusterSseSpecificationOutputReference</a>

---

##### `availabilityZonesInput`<sup>Optional</sup> <a name="availabilityZonesInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.availabilityZonesInput"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clusterEndpointEncryptionTypeInput`<sup>Optional</sup> <a name="clusterEndpointEncryptionTypeInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.clusterEndpointEncryptionTypeInput"></a>

```java
public java.lang.String getClusterEndpointEncryptionTypeInput();
```

- *Type:* java.lang.String

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.clusterNameInput"></a>

```java
public java.lang.String getClusterNameInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `iamRoleArnInput`<sup>Optional</sup> <a name="iamRoleArnInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.iamRoleArnInput"></a>

```java
public java.lang.String getIamRoleArnInput();
```

- *Type:* java.lang.String

---

##### `networkTypeInput`<sup>Optional</sup> <a name="networkTypeInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.networkTypeInput"></a>

```java
public java.lang.String getNetworkTypeInput();
```

- *Type:* java.lang.String

---

##### `nodeTypeInput`<sup>Optional</sup> <a name="nodeTypeInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.nodeTypeInput"></a>

```java
public java.lang.String getNodeTypeInput();
```

- *Type:* java.lang.String

---

##### `notificationTopicArnInput`<sup>Optional</sup> <a name="notificationTopicArnInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.notificationTopicArnInput"></a>

```java
public java.lang.String getNotificationTopicArnInput();
```

- *Type:* java.lang.String

---

##### `parameterGroupNameInput`<sup>Optional</sup> <a name="parameterGroupNameInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.parameterGroupNameInput"></a>

```java
public java.lang.String getParameterGroupNameInput();
```

- *Type:* java.lang.String

---

##### `preferredMaintenanceWindowInput`<sup>Optional</sup> <a name="preferredMaintenanceWindowInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.preferredMaintenanceWindowInput"></a>

```java
public java.lang.String getPreferredMaintenanceWindowInput();
```

- *Type:* java.lang.String

---

##### `replicationFactorInput`<sup>Optional</sup> <a name="replicationFactorInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.replicationFactorInput"></a>

```java
public java.lang.Number getReplicationFactorInput();
```

- *Type:* java.lang.Number

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sseSpecificationInput`<sup>Optional</sup> <a name="sseSpecificationInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.sseSpecificationInput"></a>

```java
public IResolvable|DaxClusterSseSpecification getSseSpecificationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecification">DaxClusterSseSpecification</a>

---

##### `subnetGroupNameInput`<sup>Optional</sup> <a name="subnetGroupNameInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.subnetGroupNameInput"></a>

```java
public java.lang.String getSubnetGroupNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.tagsInput"></a>

```java
public java.lang.String getTagsInput();
```

- *Type:* java.lang.String

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clusterEndpointEncryptionType`<sup>Required</sup> <a name="clusterEndpointEncryptionType" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.clusterEndpointEncryptionType"></a>

```java
public java.lang.String getClusterEndpointEncryptionType();
```

- *Type:* java.lang.String

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.iamRoleArn"></a>

```java
public java.lang.String getIamRoleArn();
```

- *Type:* java.lang.String

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.nodeType"></a>

```java
public java.lang.String getNodeType();
```

- *Type:* java.lang.String

---

##### `notificationTopicArn`<sup>Required</sup> <a name="notificationTopicArn" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.notificationTopicArn"></a>

```java
public java.lang.String getNotificationTopicArn();
```

- *Type:* java.lang.String

---

##### `parameterGroupName`<sup>Required</sup> <a name="parameterGroupName" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.parameterGroupName"></a>

```java
public java.lang.String getParameterGroupName();
```

- *Type:* java.lang.String

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.preferredMaintenanceWindow"></a>

```java
public java.lang.String getPreferredMaintenanceWindow();
```

- *Type:* java.lang.String

---

##### `replicationFactor`<sup>Required</sup> <a name="replicationFactor" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.replicationFactor"></a>

```java
public java.lang.Number getReplicationFactor();
```

- *Type:* java.lang.Number

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetGroupName`<sup>Required</sup> <a name="subnetGroupName" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.subnetGroupName"></a>

```java
public java.lang.String getSubnetGroupName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.tags"></a>

```java
public java.lang.String getTags();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.daxCluster.DaxCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DaxClusterConfig <a name="DaxClusterConfig" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.dax_cluster.DaxClusterConfig;

DaxClusterConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .iamRoleArn(java.lang.String)
    .nodeType(java.lang.String)
    .replicationFactor(java.lang.Number)
//  .availabilityZones(java.util.List<java.lang.String>)
//  .clusterEndpointEncryptionType(java.lang.String)
//  .clusterName(java.lang.String)
//  .description(java.lang.String)
//  .networkType(java.lang.String)
//  .notificationTopicArn(java.lang.String)
//  .parameterGroupName(java.lang.String)
//  .preferredMaintenanceWindow(java.lang.String)
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .sseSpecification(DaxClusterSseSpecification)
//  .subnetGroupName(java.lang.String)
//  .tags(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.iamRoleArn">iamRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#iam_role_arn DaxCluster#iam_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.nodeType">nodeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#node_type DaxCluster#node_type}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.replicationFactor">replicationFactor</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#replication_factor DaxCluster#replication_factor}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#availability_zones DaxCluster#availability_zones}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.clusterEndpointEncryptionType">clusterEndpointEncryptionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#cluster_endpoint_encryption_type DaxCluster#cluster_endpoint_encryption_type}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#cluster_name DaxCluster#cluster_name}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#description DaxCluster#description}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.networkType">networkType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#network_type DaxCluster#network_type}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.notificationTopicArn">notificationTopicArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#notification_topic_arn DaxCluster#notification_topic_arn}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.parameterGroupName">parameterGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#parameter_group_name DaxCluster#parameter_group_name}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#preferred_maintenance_window DaxCluster#preferred_maintenance_window}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#security_group_ids DaxCluster#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.sseSpecification">sseSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecification">DaxClusterSseSpecification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#sse_specification DaxCluster#sse_specification}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.subnetGroupName">subnetGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#subnet_group_name DaxCluster#subnet_group_name}. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.tags">tags</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#tags DaxCluster#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.iamRoleArn"></a>

```java
public java.lang.String getIamRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#iam_role_arn DaxCluster#iam_role_arn}.

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.nodeType"></a>

```java
public java.lang.String getNodeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#node_type DaxCluster#node_type}.

---

##### `replicationFactor`<sup>Required</sup> <a name="replicationFactor" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.replicationFactor"></a>

```java
public java.lang.Number getReplicationFactor();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#replication_factor DaxCluster#replication_factor}.

---

##### `availabilityZones`<sup>Optional</sup> <a name="availabilityZones" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#availability_zones DaxCluster#availability_zones}.

---

##### `clusterEndpointEncryptionType`<sup>Optional</sup> <a name="clusterEndpointEncryptionType" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.clusterEndpointEncryptionType"></a>

```java
public java.lang.String getClusterEndpointEncryptionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#cluster_endpoint_encryption_type DaxCluster#cluster_endpoint_encryption_type}.

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#cluster_name DaxCluster#cluster_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#description DaxCluster#description}.

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.networkType"></a>

```java
public java.lang.String getNetworkType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#network_type DaxCluster#network_type}.

---

##### `notificationTopicArn`<sup>Optional</sup> <a name="notificationTopicArn" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.notificationTopicArn"></a>

```java
public java.lang.String getNotificationTopicArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#notification_topic_arn DaxCluster#notification_topic_arn}.

---

##### `parameterGroupName`<sup>Optional</sup> <a name="parameterGroupName" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.parameterGroupName"></a>

```java
public java.lang.String getParameterGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#parameter_group_name DaxCluster#parameter_group_name}.

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.preferredMaintenanceWindow"></a>

```java
public java.lang.String getPreferredMaintenanceWindow();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#preferred_maintenance_window DaxCluster#preferred_maintenance_window}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#security_group_ids DaxCluster#security_group_ids}.

---

##### `sseSpecification`<sup>Optional</sup> <a name="sseSpecification" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.sseSpecification"></a>

```java
public DaxClusterSseSpecification getSseSpecification();
```

- *Type:* <a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecification">DaxClusterSseSpecification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#sse_specification DaxCluster#sse_specification}.

---

##### `subnetGroupName`<sup>Optional</sup> <a name="subnetGroupName" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.subnetGroupName"></a>

```java
public java.lang.String getSubnetGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#subnet_group_name DaxCluster#subnet_group_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.daxCluster.DaxClusterConfig.property.tags"></a>

```java
public java.lang.String getTags();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#tags DaxCluster#tags}.

---

### DaxClusterSseSpecification <a name="DaxClusterSseSpecification" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecification.Initializer"></a>

```java
import io.cdktn.providers.awscc.dax_cluster.DaxClusterSseSpecification;

DaxClusterSseSpecification.builder()
//  .sseEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecification.property.sseEnabled">sseEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#sse_enabled DaxCluster#sse_enabled}. |

---

##### `sseEnabled`<sup>Optional</sup> <a name="sseEnabled" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecification.property.sseEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSseEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/dax_cluster#sse_enabled DaxCluster#sse_enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### DaxClusterSseSpecificationOutputReference <a name="DaxClusterSseSpecificationOutputReference" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.dax_cluster.DaxClusterSseSpecificationOutputReference;

new DaxClusterSseSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.resetSseEnabled">resetSseEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSseEnabled` <a name="resetSseEnabled" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.resetSseEnabled"></a>

```java
public void resetSseEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.property.sseEnabledInput">sseEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.property.sseEnabled">sseEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecification">DaxClusterSseSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sseEnabledInput`<sup>Optional</sup> <a name="sseEnabledInput" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.property.sseEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getSseEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `sseEnabled`<sup>Required</sup> <a name="sseEnabled" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.property.sseEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSseEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecificationOutputReference.property.internalValue"></a>

```java
public IResolvable|DaxClusterSseSpecification getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.daxCluster.DaxClusterSseSpecification">DaxClusterSseSpecification</a>

---



