# `neptunegraphGraph` Submodule <a name="`neptunegraphGraph` Submodule" id="@cdktn/provider-awscc.neptunegraphGraph"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NeptunegraphGraph <a name="NeptunegraphGraph" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph awscc_neptunegraph_graph}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer"></a>

```python
from cdktn_provider_awscc import neptunegraph_graph

neptunegraphGraph.NeptunegraphGraph(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  provisioned_memory: typing.Union[int, float],
  deletion_protection: bool | IResolvable = None,
  graph_name: str = None,
  import_task: NeptunegraphGraphImportTask = None,
  kms_key_identifier: str = None,
  public_connectivity: bool | IResolvable = None,
  replica_count: typing.Union[int, float] = None,
  tags: IResolvable | typing.List[NeptunegraphGraphTags] = None,
  vector_search_configuration: NeptunegraphGraphVectorSearchConfiguration = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.provisionedMemory">provisioned_memory</a></code> | <code>typing.Union[int, float]</code> | Memory for the Graph. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.deletionProtection">deletion_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | Value that indicates whether the Graph has deletion protection enabled. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.graphName">graph_name</a></code> | <code>str</code> | Contains a user-supplied name for the Graph. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.importTask">import_task</a></code> | <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask">NeptunegraphGraphImportTask</a></code> | The details of the import task to use to create the graph. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.kmsKeyIdentifier">kms_key_identifier</a></code> | <code>str</code> | The ARN of the KMS key used to encrypt data in the Neptune Analytics graph. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.publicConnectivity">public_connectivity</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the Graph can be reached over the internet. Access to all graphs requires IAM authentication. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.replicaCount">replica_count</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of replicas you want when finished. All replicas will be provisioned in different availability zones. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags">NeptunegraphGraphTags</a>]</code> | The tags associated with this graph. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.vectorSearchConfiguration">vector_search_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a></code> | Vector Search Configuration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `provisioned_memory`<sup>Required</sup> <a name="provisioned_memory" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.provisionedMemory"></a>

- *Type:* typing.Union[int, float]

Memory for the Graph.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#provisioned_memory NeptunegraphGraph#provisioned_memory}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.deletionProtection"></a>

- *Type:* bool | cdktn.IResolvable

Value that indicates whether the Graph has deletion protection enabled.

The graph can't be deleted when deletion protection is enabled.

*Default*: If not specified, the default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#deletion_protection NeptunegraphGraph#deletion_protection}

---

##### `graph_name`<sup>Optional</sup> <a name="graph_name" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.graphName"></a>

- *Type:* str

Contains a user-supplied name for the Graph.

If you don't specify a name, we generate a unique Graph Name using a combination of Stack Name and a UUID comprising of 4 characters.

*Important*: If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#graph_name NeptunegraphGraph#graph_name}

---

##### `import_task`<sup>Optional</sup> <a name="import_task" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.importTask"></a>

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask">NeptunegraphGraphImportTask</a>

The details of the import task to use to create the graph.

When specified, the graph is created using CreateGraphUsingImportTask and data is imported from the supplied source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#import_task NeptunegraphGraph#import_task}

---

##### `kms_key_identifier`<sup>Optional</sup> <a name="kms_key_identifier" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.kmsKeyIdentifier"></a>

- *Type:* str

The ARN of the KMS key used to encrypt data in the Neptune Analytics graph.

If not specified, the graph is encrypted with an AWS managed key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#kms_key_identifier NeptunegraphGraph#kms_key_identifier}

---

##### `public_connectivity`<sup>Optional</sup> <a name="public_connectivity" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.publicConnectivity"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether the Graph can be reached over the internet. Access to all graphs requires IAM authentication.

When the Graph is publicly reachable, its Domain Name System (DNS) endpoint resolves to the public IP address from the internet.

When the Graph isn't publicly reachable, you need to create a PrivateGraphEndpoint in a given VPC to ensure the DNS name resolves to a private IP address that is reachable from the VPC.

*Default*: If not specified, the default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#public_connectivity NeptunegraphGraph#public_connectivity}

---

##### `replica_count`<sup>Optional</sup> <a name="replica_count" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.replicaCount"></a>

- *Type:* typing.Union[int, float]

Specifies the number of replicas you want when finished. All replicas will be provisioned in different availability zones.

Replica Count should always be less than or equal to 2.

*Default*: If not specified, the default value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#replica_count NeptunegraphGraph#replica_count}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags">NeptunegraphGraphTags</a>]

The tags associated with this graph.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#tags NeptunegraphGraph#tags}

---

##### `vector_search_configuration`<sup>Optional</sup> <a name="vector_search_configuration" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.vectorSearchConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a>

Vector Search Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#vector_search_configuration NeptunegraphGraph#vector_search_configuration}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.putImportTask">put_import_task</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.putVectorSearchConfiguration">put_vector_search_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetDeletionProtection">reset_deletion_protection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetGraphName">reset_graph_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetImportTask">reset_import_task</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetKmsKeyIdentifier">reset_kms_key_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetPublicConnectivity">reset_public_connectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetReplicaCount">reset_replica_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetVectorSearchConfiguration">reset_vector_search_configuration</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_import_task` <a name="put_import_task" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.putImportTask"></a>

```python
def put_import_task(
  blank_node_handling: str = None,
  fail_on_error: bool | IResolvable = None,
  format: str = None,
  import_options: NeptunegraphGraphImportTaskImportOptions = None,
  max_provisioned_memory: typing.Union[int, float] = None,
  min_provisioned_memory: typing.Union[int, float] = None,
  parquet_type: str = None,
  role_arn: str = None,
  source: str = None
) -> None
```

###### `blank_node_handling`<sup>Optional</sup> <a name="blank_node_handling" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.putImportTask.parameter.blankNodeHandling"></a>

- *Type:* str

The method to handle blank nodes in the dataset.

Currently, only convertToIri is supported, meaning blank nodes are converted to unique IRIs at load time. Must be provided when format is NTRIPLES

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#blank_node_handling NeptunegraphGraph#blank_node_handling}

---

###### `fail_on_error`<sup>Optional</sup> <a name="fail_on_error" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.putImportTask.parameter.failOnError"></a>

- *Type:* bool | cdktn.IResolvable

If set to true, the task halts when an import error is encountered.

If set to false, the task skips the data that caused the error and continues if possible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#fail_on_error NeptunegraphGraph#fail_on_error}

---

###### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.putImportTask.parameter.format"></a>

- *Type:* str

Specifies the format of S3 data to be imported.

Valid values are CSV, which identifies the Gremlin CSV format, OPEN_CYPHER, which identifies the openCypher load format, or NTRIPLES, which identifies the RDF n-triples format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#format NeptunegraphGraph#format}

---

###### `import_options`<sup>Optional</sup> <a name="import_options" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.putImportTask.parameter.importOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptions">NeptunegraphGraphImportTaskImportOptions</a>

Contains options for controlling the import process.

For example, if the failOnError key is set to false, the import skips the data that caused the error and continues if possible (whereas if set to true, the default, or if omitted, the import operation halts immediately when an error is encountered).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#import_options NeptunegraphGraph#import_options}

---

###### `max_provisioned_memory`<sup>Optional</sup> <a name="max_provisioned_memory" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.putImportTask.parameter.maxProvisionedMemory"></a>

- *Type:* typing.Union[int, float]

The maximum provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph.

Default: 1024, or the approved upper limit for your account. If both the minimum and maximum values are specified, the final provisioned-memory will be chosen per the actual size of your imported data. If neither value is specified, 128 m-NCUs are used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#max_provisioned_memory NeptunegraphGraph#max_provisioned_memory}

---

###### `min_provisioned_memory`<sup>Optional</sup> <a name="min_provisioned_memory" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.putImportTask.parameter.minProvisionedMemory"></a>

- *Type:* typing.Union[int, float]

The minimum provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph. Default: 16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#min_provisioned_memory NeptunegraphGraph#min_provisioned_memory}

---

###### `parquet_type`<sup>Optional</sup> <a name="parquet_type" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.putImportTask.parameter.parquetType"></a>

- *Type:* str

The parquet type of the import task. Required when Format is PARQUET.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#parquet_type NeptunegraphGraph#parquet_type}

---

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.putImportTask.parameter.roleArn"></a>

- *Type:* str

The ARN of the IAM role that will allow access to the data that is to be imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#role_arn NeptunegraphGraph#role_arn}

---

###### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.putImportTask.parameter.source"></a>

- *Type:* str

A URL identifying to the location of the data to be imported.

This can be an Amazon S3 path, or can point to a Neptune database endpoint or snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#source NeptunegraphGraph#source}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[NeptunegraphGraphTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags">NeptunegraphGraphTags</a>]

---

##### `put_vector_search_configuration` <a name="put_vector_search_configuration" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.putVectorSearchConfiguration"></a>

```python
def put_vector_search_configuration(
  vector_search_dimension: typing.Union[int, float] = None
) -> None
```

###### `vector_search_dimension`<sup>Optional</sup> <a name="vector_search_dimension" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.putVectorSearchConfiguration.parameter.vectorSearchDimension"></a>

- *Type:* typing.Union[int, float]

The vector search dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#vector_search_dimension NeptunegraphGraph#vector_search_dimension}

---

##### `reset_deletion_protection` <a name="reset_deletion_protection" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetDeletionProtection"></a>

```python
def reset_deletion_protection() -> None
```

##### `reset_graph_name` <a name="reset_graph_name" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetGraphName"></a>

```python
def reset_graph_name() -> None
```

##### `reset_import_task` <a name="reset_import_task" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetImportTask"></a>

```python
def reset_import_task() -> None
```

##### `reset_kms_key_identifier` <a name="reset_kms_key_identifier" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetKmsKeyIdentifier"></a>

```python
def reset_kms_key_identifier() -> None
```

##### `reset_public_connectivity` <a name="reset_public_connectivity" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetPublicConnectivity"></a>

```python
def reset_public_connectivity() -> None
```

##### `reset_replica_count` <a name="reset_replica_count" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetReplicaCount"></a>

```python
def reset_replica_count() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_vector_search_configuration` <a name="reset_vector_search_configuration" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetVectorSearchConfiguration"></a>

```python
def reset_vector_search_configuration() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NeptunegraphGraph resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.isConstruct"></a>

```python
from cdktn_provider_awscc import neptunegraph_graph

neptunegraphGraph.NeptunegraphGraph.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.isTerraformElement"></a>

```python
from cdktn_provider_awscc import neptunegraph_graph

neptunegraphGraph.NeptunegraphGraph.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.isTerraformResource"></a>

```python
from cdktn_provider_awscc import neptunegraph_graph

neptunegraphGraph.NeptunegraphGraph.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import neptunegraph_graph

neptunegraphGraph.NeptunegraphGraph.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NeptunegraphGraph resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NeptunegraphGraph to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NeptunegraphGraph that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NeptunegraphGraph to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.graphArn">graph_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.graphId">graph_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.importTask">import_task</a></code> | <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference">NeptunegraphGraphImportTaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList">NeptunegraphGraphTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.vectorSearchConfiguration">vector_search_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference">NeptunegraphGraphVectorSearchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.deletionProtectionInput">deletion_protection_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.graphNameInput">graph_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.importTaskInput">import_task_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask">NeptunegraphGraphImportTask</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.kmsKeyIdentifierInput">kms_key_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.provisionedMemoryInput">provisioned_memory_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.publicConnectivityInput">public_connectivity_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.replicaCountInput">replica_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags">NeptunegraphGraphTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.vectorSearchConfigurationInput">vector_search_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.deletionProtection">deletion_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.graphName">graph_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.kmsKeyIdentifier">kms_key_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.provisionedMemory">provisioned_memory</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.publicConnectivity">public_connectivity</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.replicaCount">replica_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `graph_arn`<sup>Required</sup> <a name="graph_arn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.graphArn"></a>

```python
graph_arn: str
```

- *Type:* str

---

##### `graph_id`<sup>Required</sup> <a name="graph_id" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.graphId"></a>

```python
graph_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `import_task`<sup>Required</sup> <a name="import_task" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.importTask"></a>

```python
import_task: NeptunegraphGraphImportTaskOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference">NeptunegraphGraphImportTaskOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.tags"></a>

```python
tags: NeptunegraphGraphTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList">NeptunegraphGraphTagsList</a>

---

##### `vector_search_configuration`<sup>Required</sup> <a name="vector_search_configuration" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.vectorSearchConfiguration"></a>

```python
vector_search_configuration: NeptunegraphGraphVectorSearchConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference">NeptunegraphGraphVectorSearchConfigurationOutputReference</a>

---

##### `deletion_protection_input`<sup>Optional</sup> <a name="deletion_protection_input" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.deletionProtectionInput"></a>

```python
deletion_protection_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `graph_name_input`<sup>Optional</sup> <a name="graph_name_input" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.graphNameInput"></a>

```python
graph_name_input: str
```

- *Type:* str

---

##### `import_task_input`<sup>Optional</sup> <a name="import_task_input" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.importTaskInput"></a>

```python
import_task_input: IResolvable | NeptunegraphGraphImportTask
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask">NeptunegraphGraphImportTask</a>

---

##### `kms_key_identifier_input`<sup>Optional</sup> <a name="kms_key_identifier_input" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.kmsKeyIdentifierInput"></a>

```python
kms_key_identifier_input: str
```

- *Type:* str

---

##### `provisioned_memory_input`<sup>Optional</sup> <a name="provisioned_memory_input" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.provisionedMemoryInput"></a>

```python
provisioned_memory_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `public_connectivity_input`<sup>Optional</sup> <a name="public_connectivity_input" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.publicConnectivityInput"></a>

```python
public_connectivity_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `replica_count_input`<sup>Optional</sup> <a name="replica_count_input" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.replicaCountInput"></a>

```python
replica_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[NeptunegraphGraphTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags">NeptunegraphGraphTags</a>]

---

##### `vector_search_configuration_input`<sup>Optional</sup> <a name="vector_search_configuration_input" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.vectorSearchConfigurationInput"></a>

```python
vector_search_configuration_input: IResolvable | NeptunegraphGraphVectorSearchConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a>

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.deletionProtection"></a>

```python
deletion_protection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `graph_name`<sup>Required</sup> <a name="graph_name" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.graphName"></a>

```python
graph_name: str
```

- *Type:* str

---

##### `kms_key_identifier`<sup>Required</sup> <a name="kms_key_identifier" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.kmsKeyIdentifier"></a>

```python
kms_key_identifier: str
```

- *Type:* str

---

##### `provisioned_memory`<sup>Required</sup> <a name="provisioned_memory" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.provisionedMemory"></a>

```python
provisioned_memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `public_connectivity`<sup>Required</sup> <a name="public_connectivity" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.publicConnectivity"></a>

```python
public_connectivity: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `replica_count`<sup>Required</sup> <a name="replica_count" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.replicaCount"></a>

```python
replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NeptunegraphGraphConfig <a name="NeptunegraphGraphConfig" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.Initializer"></a>

```python
from cdktn_provider_awscc import neptunegraph_graph

neptunegraphGraph.NeptunegraphGraphConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  provisioned_memory: typing.Union[int, float],
  deletion_protection: bool | IResolvable = None,
  graph_name: str = None,
  import_task: NeptunegraphGraphImportTask = None,
  kms_key_identifier: str = None,
  public_connectivity: bool | IResolvable = None,
  replica_count: typing.Union[int, float] = None,
  tags: IResolvable | typing.List[NeptunegraphGraphTags] = None,
  vector_search_configuration: NeptunegraphGraphVectorSearchConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.provisionedMemory">provisioned_memory</a></code> | <code>typing.Union[int, float]</code> | Memory for the Graph. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.deletionProtection">deletion_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | Value that indicates whether the Graph has deletion protection enabled. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.graphName">graph_name</a></code> | <code>str</code> | Contains a user-supplied name for the Graph. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.importTask">import_task</a></code> | <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask">NeptunegraphGraphImportTask</a></code> | The details of the import task to use to create the graph. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.kmsKeyIdentifier">kms_key_identifier</a></code> | <code>str</code> | The ARN of the KMS key used to encrypt data in the Neptune Analytics graph. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.publicConnectivity">public_connectivity</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the Graph can be reached over the internet. Access to all graphs requires IAM authentication. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.replicaCount">replica_count</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of replicas you want when finished. All replicas will be provisioned in different availability zones. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags">NeptunegraphGraphTags</a>]</code> | The tags associated with this graph. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.vectorSearchConfiguration">vector_search_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a></code> | Vector Search Configuration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `provisioned_memory`<sup>Required</sup> <a name="provisioned_memory" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.provisionedMemory"></a>

```python
provisioned_memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Memory for the Graph.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#provisioned_memory NeptunegraphGraph#provisioned_memory}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.deletionProtection"></a>

```python
deletion_protection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Value that indicates whether the Graph has deletion protection enabled.

The graph can't be deleted when deletion protection is enabled.

*Default*: If not specified, the default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#deletion_protection NeptunegraphGraph#deletion_protection}

---

##### `graph_name`<sup>Optional</sup> <a name="graph_name" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.graphName"></a>

```python
graph_name: str
```

- *Type:* str

Contains a user-supplied name for the Graph.

If you don't specify a name, we generate a unique Graph Name using a combination of Stack Name and a UUID comprising of 4 characters.

*Important*: If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#graph_name NeptunegraphGraph#graph_name}

---

##### `import_task`<sup>Optional</sup> <a name="import_task" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.importTask"></a>

```python
import_task: NeptunegraphGraphImportTask
```

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask">NeptunegraphGraphImportTask</a>

The details of the import task to use to create the graph.

When specified, the graph is created using CreateGraphUsingImportTask and data is imported from the supplied source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#import_task NeptunegraphGraph#import_task}

---

##### `kms_key_identifier`<sup>Optional</sup> <a name="kms_key_identifier" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.kmsKeyIdentifier"></a>

```python
kms_key_identifier: str
```

- *Type:* str

The ARN of the KMS key used to encrypt data in the Neptune Analytics graph.

If not specified, the graph is encrypted with an AWS managed key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#kms_key_identifier NeptunegraphGraph#kms_key_identifier}

---

##### `public_connectivity`<sup>Optional</sup> <a name="public_connectivity" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.publicConnectivity"></a>

```python
public_connectivity: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether the Graph can be reached over the internet. Access to all graphs requires IAM authentication.

When the Graph is publicly reachable, its Domain Name System (DNS) endpoint resolves to the public IP address from the internet.

When the Graph isn't publicly reachable, you need to create a PrivateGraphEndpoint in a given VPC to ensure the DNS name resolves to a private IP address that is reachable from the VPC.

*Default*: If not specified, the default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#public_connectivity NeptunegraphGraph#public_connectivity}

---

##### `replica_count`<sup>Optional</sup> <a name="replica_count" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.replicaCount"></a>

```python
replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the number of replicas you want when finished. All replicas will be provisioned in different availability zones.

Replica Count should always be less than or equal to 2.

*Default*: If not specified, the default value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#replica_count NeptunegraphGraph#replica_count}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[NeptunegraphGraphTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags">NeptunegraphGraphTags</a>]

The tags associated with this graph.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#tags NeptunegraphGraph#tags}

---

##### `vector_search_configuration`<sup>Optional</sup> <a name="vector_search_configuration" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.vectorSearchConfiguration"></a>

```python
vector_search_configuration: NeptunegraphGraphVectorSearchConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a>

Vector Search Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#vector_search_configuration NeptunegraphGraph#vector_search_configuration}

---

### NeptunegraphGraphImportTask <a name="NeptunegraphGraphImportTask" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.Initializer"></a>

```python
from cdktn_provider_awscc import neptunegraph_graph

neptunegraphGraph.NeptunegraphGraphImportTask(
  blank_node_handling: str = None,
  fail_on_error: bool | IResolvable = None,
  format: str = None,
  import_options: NeptunegraphGraphImportTaskImportOptions = None,
  max_provisioned_memory: typing.Union[int, float] = None,
  min_provisioned_memory: typing.Union[int, float] = None,
  parquet_type: str = None,
  role_arn: str = None,
  source: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.blankNodeHandling">blank_node_handling</a></code> | <code>str</code> | The method to handle blank nodes in the dataset. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.failOnError">fail_on_error</a></code> | <code>bool \| cdktn.IResolvable</code> | If set to true, the task halts when an import error is encountered. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.format">format</a></code> | <code>str</code> | Specifies the format of S3 data to be imported. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.importOptions">import_options</a></code> | <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptions">NeptunegraphGraphImportTaskImportOptions</a></code> | Contains options for controlling the import process. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.maxProvisionedMemory">max_provisioned_memory</a></code> | <code>typing.Union[int, float]</code> | The maximum provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.minProvisionedMemory">min_provisioned_memory</a></code> | <code>typing.Union[int, float]</code> | The minimum provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph. Default: 16. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.parquetType">parquet_type</a></code> | <code>str</code> | The parquet type of the import task. Required when Format is PARQUET. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.roleArn">role_arn</a></code> | <code>str</code> | The ARN of the IAM role that will allow access to the data that is to be imported. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.source">source</a></code> | <code>str</code> | A URL identifying to the location of the data to be imported. |

---

##### `blank_node_handling`<sup>Optional</sup> <a name="blank_node_handling" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.blankNodeHandling"></a>

```python
blank_node_handling: str
```

- *Type:* str

The method to handle blank nodes in the dataset.

Currently, only convertToIri is supported, meaning blank nodes are converted to unique IRIs at load time. Must be provided when format is NTRIPLES

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#blank_node_handling NeptunegraphGraph#blank_node_handling}

---

##### `fail_on_error`<sup>Optional</sup> <a name="fail_on_error" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.failOnError"></a>

```python
fail_on_error: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If set to true, the task halts when an import error is encountered.

If set to false, the task skips the data that caused the error and continues if possible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#fail_on_error NeptunegraphGraph#fail_on_error}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.format"></a>

```python
format: str
```

- *Type:* str

Specifies the format of S3 data to be imported.

Valid values are CSV, which identifies the Gremlin CSV format, OPEN_CYPHER, which identifies the openCypher load format, or NTRIPLES, which identifies the RDF n-triples format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#format NeptunegraphGraph#format}

---

##### `import_options`<sup>Optional</sup> <a name="import_options" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.importOptions"></a>

```python
import_options: NeptunegraphGraphImportTaskImportOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptions">NeptunegraphGraphImportTaskImportOptions</a>

Contains options for controlling the import process.

For example, if the failOnError key is set to false, the import skips the data that caused the error and continues if possible (whereas if set to true, the default, or if omitted, the import operation halts immediately when an error is encountered).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#import_options NeptunegraphGraph#import_options}

---

##### `max_provisioned_memory`<sup>Optional</sup> <a name="max_provisioned_memory" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.maxProvisionedMemory"></a>

```python
max_provisioned_memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph.

Default: 1024, or the approved upper limit for your account. If both the minimum and maximum values are specified, the final provisioned-memory will be chosen per the actual size of your imported data. If neither value is specified, 128 m-NCUs are used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#max_provisioned_memory NeptunegraphGraph#max_provisioned_memory}

---

##### `min_provisioned_memory`<sup>Optional</sup> <a name="min_provisioned_memory" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.minProvisionedMemory"></a>

```python
min_provisioned_memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph. Default: 16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#min_provisioned_memory NeptunegraphGraph#min_provisioned_memory}

---

##### `parquet_type`<sup>Optional</sup> <a name="parquet_type" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.parquetType"></a>

```python
parquet_type: str
```

- *Type:* str

The parquet type of the import task. Required when Format is PARQUET.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#parquet_type NeptunegraphGraph#parquet_type}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The ARN of the IAM role that will allow access to the data that is to be imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#role_arn NeptunegraphGraph#role_arn}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.source"></a>

```python
source: str
```

- *Type:* str

A URL identifying to the location of the data to be imported.

This can be an Amazon S3 path, or can point to a Neptune database endpoint or snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#source NeptunegraphGraph#source}

---

### NeptunegraphGraphImportTaskImportOptions <a name="NeptunegraphGraphImportTaskImportOptions" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptions.Initializer"></a>

```python
from cdktn_provider_awscc import neptunegraph_graph

neptunegraphGraph.NeptunegraphGraphImportTaskImportOptions(
  neptune: NeptunegraphGraphImportTaskImportOptionsNeptune = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptions.property.neptune">neptune</a></code> | <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune">NeptunegraphGraphImportTaskImportOptionsNeptune</a></code> | Options for importing data from a Neptune database. |

---

##### `neptune`<sup>Optional</sup> <a name="neptune" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptions.property.neptune"></a>

```python
neptune: NeptunegraphGraphImportTaskImportOptionsNeptune
```

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune">NeptunegraphGraphImportTaskImportOptionsNeptune</a>

Options for importing data from a Neptune database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#neptune NeptunegraphGraph#neptune}

---

### NeptunegraphGraphImportTaskImportOptionsNeptune <a name="NeptunegraphGraphImportTaskImportOptionsNeptune" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune.Initializer"></a>

```python
from cdktn_provider_awscc import neptunegraph_graph

neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune(
  preserve_default_vertex_labels: bool | IResolvable = None,
  preserve_edge_ids: bool | IResolvable = None,
  s3_export_kms_key_id: str = None,
  s3_export_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune.property.preserveDefaultVertexLabels">preserve_default_vertex_labels</a></code> | <code>bool \| cdktn.IResolvable</code> | Neptune Analytics supports label-less vertices and no labels are assigned unless one is explicitly provided. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune.property.preserveEdgeIds">preserve_edge_ids</a></code> | <code>bool \| cdktn.IResolvable</code> | Neptune Analytics currently does not support user defined edge ids. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune.property.s3ExportKmsKeyId">s3_export_kms_key_id</a></code> | <code>str</code> | The KMS key to use to encrypt data in the S3 bucket where the graph data is exported. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune.property.s3ExportPath">s3_export_path</a></code> | <code>str</code> | The path to an S3 bucket from which to import data. |

---

##### `preserve_default_vertex_labels`<sup>Optional</sup> <a name="preserve_default_vertex_labels" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune.property.preserveDefaultVertexLabels"></a>

```python
preserve_default_vertex_labels: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Neptune Analytics supports label-less vertices and no labels are assigned unless one is explicitly provided.

Neptune assigns default labels when none is explicitly provided. When importing the data into Neptune Analytics, the default vertex labels can be omitted by setting preserveDefaultVertexLabels to false. Note that if the vertex only has default labels, and has no other properties or edges, then the vertex will effectively not get imported into Neptune Analytics when preserveDefaultVertexLabels is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#preserve_default_vertex_labels NeptunegraphGraph#preserve_default_vertex_labels}

---

##### `preserve_edge_ids`<sup>Optional</sup> <a name="preserve_edge_ids" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune.property.preserveEdgeIds"></a>

```python
preserve_edge_ids: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Neptune Analytics currently does not support user defined edge ids.

The edge ids are not imported by default. They are imported if preserveEdgeIds is set to true, and ids are stored as properties on the relationships with the property name neptuneEdgeId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#preserve_edge_ids NeptunegraphGraph#preserve_edge_ids}

---

##### `s3_export_kms_key_id`<sup>Optional</sup> <a name="s3_export_kms_key_id" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune.property.s3ExportKmsKeyId"></a>

```python
s3_export_kms_key_id: str
```

- *Type:* str

The KMS key to use to encrypt data in the S3 bucket where the graph data is exported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#s3_export_kms_key_id NeptunegraphGraph#s3_export_kms_key_id}

---

##### `s3_export_path`<sup>Optional</sup> <a name="s3_export_path" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune.property.s3ExportPath"></a>

```python
s3_export_path: str
```

- *Type:* str

The path to an S3 bucket from which to import data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#s3_export_path NeptunegraphGraph#s3_export_path}

---

### NeptunegraphGraphTags <a name="NeptunegraphGraphTags" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags.Initializer"></a>

```python
from cdktn_provider_awscc import neptunegraph_graph

neptunegraphGraph.NeptunegraphGraphTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#key NeptunegraphGraph#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#value NeptunegraphGraph#value}

---

### NeptunegraphGraphVectorSearchConfiguration <a name="NeptunegraphGraphVectorSearchConfiguration" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import neptunegraph_graph

neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration(
  vector_search_dimension: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration.property.vectorSearchDimension">vector_search_dimension</a></code> | <code>typing.Union[int, float]</code> | The vector search dimension. |

---

##### `vector_search_dimension`<sup>Optional</sup> <a name="vector_search_dimension" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration.property.vectorSearchDimension"></a>

```python
vector_search_dimension: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The vector search dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#vector_search_dimension NeptunegraphGraph#vector_search_dimension}

---

## Classes <a name="Classes" id="Classes"></a>

### NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference <a name="NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import neptunegraph_graph

neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resetPreserveDefaultVertexLabels">reset_preserve_default_vertex_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resetPreserveEdgeIds">reset_preserve_edge_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resetS3ExportKmsKeyId">reset_s3_export_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resetS3ExportPath">reset_s3_export_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_preserve_default_vertex_labels` <a name="reset_preserve_default_vertex_labels" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resetPreserveDefaultVertexLabels"></a>

```python
def reset_preserve_default_vertex_labels() -> None
```

##### `reset_preserve_edge_ids` <a name="reset_preserve_edge_ids" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resetPreserveEdgeIds"></a>

```python
def reset_preserve_edge_ids() -> None
```

##### `reset_s3_export_kms_key_id` <a name="reset_s3_export_kms_key_id" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resetS3ExportKmsKeyId"></a>

```python
def reset_s3_export_kms_key_id() -> None
```

##### `reset_s3_export_path` <a name="reset_s3_export_path" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resetS3ExportPath"></a>

```python
def reset_s3_export_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.preserveDefaultVertexLabelsInput">preserve_default_vertex_labels_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.preserveEdgeIdsInput">preserve_edge_ids_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.s3ExportKmsKeyIdInput">s3_export_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.s3ExportPathInput">s3_export_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.preserveDefaultVertexLabels">preserve_default_vertex_labels</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.preserveEdgeIds">preserve_edge_ids</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.s3ExportKmsKeyId">s3_export_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.s3ExportPath">s3_export_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune">NeptunegraphGraphImportTaskImportOptionsNeptune</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `preserve_default_vertex_labels_input`<sup>Optional</sup> <a name="preserve_default_vertex_labels_input" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.preserveDefaultVertexLabelsInput"></a>

```python
preserve_default_vertex_labels_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `preserve_edge_ids_input`<sup>Optional</sup> <a name="preserve_edge_ids_input" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.preserveEdgeIdsInput"></a>

```python
preserve_edge_ids_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `s3_export_kms_key_id_input`<sup>Optional</sup> <a name="s3_export_kms_key_id_input" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.s3ExportKmsKeyIdInput"></a>

```python
s3_export_kms_key_id_input: str
```

- *Type:* str

---

##### `s3_export_path_input`<sup>Optional</sup> <a name="s3_export_path_input" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.s3ExportPathInput"></a>

```python
s3_export_path_input: str
```

- *Type:* str

---

##### `preserve_default_vertex_labels`<sup>Required</sup> <a name="preserve_default_vertex_labels" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.preserveDefaultVertexLabels"></a>

```python
preserve_default_vertex_labels: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `preserve_edge_ids`<sup>Required</sup> <a name="preserve_edge_ids" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.preserveEdgeIds"></a>

```python
preserve_edge_ids: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `s3_export_kms_key_id`<sup>Required</sup> <a name="s3_export_kms_key_id" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.s3ExportKmsKeyId"></a>

```python
s3_export_kms_key_id: str
```

- *Type:* str

---

##### `s3_export_path`<sup>Required</sup> <a name="s3_export_path" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.s3ExportPath"></a>

```python
s3_export_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NeptunegraphGraphImportTaskImportOptionsNeptune
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune">NeptunegraphGraphImportTaskImportOptionsNeptune</a>

---


### NeptunegraphGraphImportTaskImportOptionsOutputReference <a name="NeptunegraphGraphImportTaskImportOptionsOutputReference" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import neptunegraph_graph

neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.putNeptune">put_neptune</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.resetNeptune">reset_neptune</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_neptune` <a name="put_neptune" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.putNeptune"></a>

```python
def put_neptune(
  preserve_default_vertex_labels: bool | IResolvable = None,
  preserve_edge_ids: bool | IResolvable = None,
  s3_export_kms_key_id: str = None,
  s3_export_path: str = None
) -> None
```

###### `preserve_default_vertex_labels`<sup>Optional</sup> <a name="preserve_default_vertex_labels" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.putNeptune.parameter.preserveDefaultVertexLabels"></a>

- *Type:* bool | cdktn.IResolvable

Neptune Analytics supports label-less vertices and no labels are assigned unless one is explicitly provided.

Neptune assigns default labels when none is explicitly provided. When importing the data into Neptune Analytics, the default vertex labels can be omitted by setting preserveDefaultVertexLabels to false. Note that if the vertex only has default labels, and has no other properties or edges, then the vertex will effectively not get imported into Neptune Analytics when preserveDefaultVertexLabels is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#preserve_default_vertex_labels NeptunegraphGraph#preserve_default_vertex_labels}

---

###### `preserve_edge_ids`<sup>Optional</sup> <a name="preserve_edge_ids" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.putNeptune.parameter.preserveEdgeIds"></a>

- *Type:* bool | cdktn.IResolvable

Neptune Analytics currently does not support user defined edge ids.

The edge ids are not imported by default. They are imported if preserveEdgeIds is set to true, and ids are stored as properties on the relationships with the property name neptuneEdgeId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#preserve_edge_ids NeptunegraphGraph#preserve_edge_ids}

---

###### `s3_export_kms_key_id`<sup>Optional</sup> <a name="s3_export_kms_key_id" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.putNeptune.parameter.s3ExportKmsKeyId"></a>

- *Type:* str

The KMS key to use to encrypt data in the S3 bucket where the graph data is exported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#s3_export_kms_key_id NeptunegraphGraph#s3_export_kms_key_id}

---

###### `s3_export_path`<sup>Optional</sup> <a name="s3_export_path" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.putNeptune.parameter.s3ExportPath"></a>

- *Type:* str

The path to an S3 bucket from which to import data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#s3_export_path NeptunegraphGraph#s3_export_path}

---

##### `reset_neptune` <a name="reset_neptune" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.resetNeptune"></a>

```python
def reset_neptune() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.property.neptune">neptune</a></code> | <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference">NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.property.neptuneInput">neptune_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune">NeptunegraphGraphImportTaskImportOptionsNeptune</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptions">NeptunegraphGraphImportTaskImportOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `neptune`<sup>Required</sup> <a name="neptune" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.property.neptune"></a>

```python
neptune: NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference">NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference</a>

---

##### `neptune_input`<sup>Optional</sup> <a name="neptune_input" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.property.neptuneInput"></a>

```python
neptune_input: IResolvable | NeptunegraphGraphImportTaskImportOptionsNeptune
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune">NeptunegraphGraphImportTaskImportOptionsNeptune</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NeptunegraphGraphImportTaskImportOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptions">NeptunegraphGraphImportTaskImportOptions</a>

---


### NeptunegraphGraphImportTaskOutputReference <a name="NeptunegraphGraphImportTaskOutputReference" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import neptunegraph_graph

neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.putImportOptions">put_import_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetBlankNodeHandling">reset_blank_node_handling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetFailOnError">reset_fail_on_error</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetFormat">reset_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetImportOptions">reset_import_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetMaxProvisionedMemory">reset_max_provisioned_memory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetMinProvisionedMemory">reset_min_provisioned_memory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetParquetType">reset_parquet_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetSource">reset_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_import_options` <a name="put_import_options" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.putImportOptions"></a>

```python
def put_import_options(
  neptune: NeptunegraphGraphImportTaskImportOptionsNeptune = None
) -> None
```

###### `neptune`<sup>Optional</sup> <a name="neptune" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.putImportOptions.parameter.neptune"></a>

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune">NeptunegraphGraphImportTaskImportOptionsNeptune</a>

Options for importing data from a Neptune database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#neptune NeptunegraphGraph#neptune}

---

##### `reset_blank_node_handling` <a name="reset_blank_node_handling" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetBlankNodeHandling"></a>

```python
def reset_blank_node_handling() -> None
```

##### `reset_fail_on_error` <a name="reset_fail_on_error" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetFailOnError"></a>

```python
def reset_fail_on_error() -> None
```

##### `reset_format` <a name="reset_format" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetFormat"></a>

```python
def reset_format() -> None
```

##### `reset_import_options` <a name="reset_import_options" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetImportOptions"></a>

```python
def reset_import_options() -> None
```

##### `reset_max_provisioned_memory` <a name="reset_max_provisioned_memory" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetMaxProvisionedMemory"></a>

```python
def reset_max_provisioned_memory() -> None
```

##### `reset_min_provisioned_memory` <a name="reset_min_provisioned_memory" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetMinProvisionedMemory"></a>

```python
def reset_min_provisioned_memory() -> None
```

##### `reset_parquet_type` <a name="reset_parquet_type" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetParquetType"></a>

```python
def reset_parquet_type() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetSource"></a>

```python
def reset_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.importOptions">import_options</a></code> | <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference">NeptunegraphGraphImportTaskImportOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.blankNodeHandlingInput">blank_node_handling_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.failOnErrorInput">fail_on_error_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.importOptionsInput">import_options_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptions">NeptunegraphGraphImportTaskImportOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.maxProvisionedMemoryInput">max_provisioned_memory_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.minProvisionedMemoryInput">min_provisioned_memory_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.parquetTypeInput">parquet_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.blankNodeHandling">blank_node_handling</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.failOnError">fail_on_error</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.maxProvisionedMemory">max_provisioned_memory</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.minProvisionedMemory">min_provisioned_memory</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.parquetType">parquet_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask">NeptunegraphGraphImportTask</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `import_options`<sup>Required</sup> <a name="import_options" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.importOptions"></a>

```python
import_options: NeptunegraphGraphImportTaskImportOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference">NeptunegraphGraphImportTaskImportOptionsOutputReference</a>

---

##### `blank_node_handling_input`<sup>Optional</sup> <a name="blank_node_handling_input" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.blankNodeHandlingInput"></a>

```python
blank_node_handling_input: str
```

- *Type:* str

---

##### `fail_on_error_input`<sup>Optional</sup> <a name="fail_on_error_input" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.failOnErrorInput"></a>

```python
fail_on_error_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `import_options_input`<sup>Optional</sup> <a name="import_options_input" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.importOptionsInput"></a>

```python
import_options_input: IResolvable | NeptunegraphGraphImportTaskImportOptions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptions">NeptunegraphGraphImportTaskImportOptions</a>

---

##### `max_provisioned_memory_input`<sup>Optional</sup> <a name="max_provisioned_memory_input" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.maxProvisionedMemoryInput"></a>

```python
max_provisioned_memory_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_provisioned_memory_input`<sup>Optional</sup> <a name="min_provisioned_memory_input" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.minProvisionedMemoryInput"></a>

```python
min_provisioned_memory_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parquet_type_input`<sup>Optional</sup> <a name="parquet_type_input" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.parquetTypeInput"></a>

```python
parquet_type_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `blank_node_handling`<sup>Required</sup> <a name="blank_node_handling" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.blankNodeHandling"></a>

```python
blank_node_handling: str
```

- *Type:* str

---

##### `fail_on_error`<sup>Required</sup> <a name="fail_on_error" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.failOnError"></a>

```python
fail_on_error: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `max_provisioned_memory`<sup>Required</sup> <a name="max_provisioned_memory" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.maxProvisionedMemory"></a>

```python
max_provisioned_memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_provisioned_memory`<sup>Required</sup> <a name="min_provisioned_memory" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.minProvisionedMemory"></a>

```python
min_provisioned_memory: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parquet_type`<sup>Required</sup> <a name="parquet_type" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.parquetType"></a>

```python
parquet_type: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NeptunegraphGraphImportTask
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask">NeptunegraphGraphImportTask</a>

---


### NeptunegraphGraphTagsList <a name="NeptunegraphGraphTagsList" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import neptunegraph_graph

neptunegraphGraph.NeptunegraphGraphTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NeptunegraphGraphTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags">NeptunegraphGraphTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NeptunegraphGraphTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags">NeptunegraphGraphTags</a>]

---


### NeptunegraphGraphTagsOutputReference <a name="NeptunegraphGraphTagsOutputReference" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import neptunegraph_graph

neptunegraphGraph.NeptunegraphGraphTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags">NeptunegraphGraphTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NeptunegraphGraphTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags">NeptunegraphGraphTags</a>

---


### NeptunegraphGraphVectorSearchConfigurationOutputReference <a name="NeptunegraphGraphVectorSearchConfigurationOutputReference" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import neptunegraph_graph

neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.resetVectorSearchDimension">reset_vector_search_dimension</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_vector_search_dimension` <a name="reset_vector_search_dimension" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.resetVectorSearchDimension"></a>

```python
def reset_vector_search_dimension() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.vectorSearchDimensionInput">vector_search_dimension_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.vectorSearchDimension">vector_search_dimension</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vector_search_dimension_input`<sup>Optional</sup> <a name="vector_search_dimension_input" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.vectorSearchDimensionInput"></a>

```python
vector_search_dimension_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vector_search_dimension`<sup>Required</sup> <a name="vector_search_dimension" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.vectorSearchDimension"></a>

```python
vector_search_dimension: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NeptunegraphGraphVectorSearchConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a>

---



