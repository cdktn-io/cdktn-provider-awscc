# `glueSession` Submodule <a name="`glueSession` Submodule" id="@cdktn/provider-awscc.glueSession"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueSession <a name="GlueSession" id="@cdktn/provider-awscc.glueSession.GlueSession"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session awscc_glue_session}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer"></a>

```python
from cdktn_provider_awscc import glue_session

glueSession.GlueSession(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  command: GlueSessionCommand,
  role: str,
  session_id: str,
  connections: GlueSessionConnections = None,
  default_arguments: typing.Mapping[str] = None,
  description: str = None,
  glue_version: str = None,
  idle_timeout: typing.Union[int, float] = None,
  max_capacity: typing.Union[int, float] = None,
  number_of_workers: typing.Union[int, float] = None,
  request_origin: str = None,
  security_configuration: str = None,
  tags: IResolvable | typing.List[GlueSessionTags] = None,
  timeout: typing.Union[int, float] = None,
  worker_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.command">command</a></code> | <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommand">GlueSessionCommand</a></code> | The SessionCommand that runs the job. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.role">role</a></code> | <code>str</code> | The IAM Role ARN. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.sessionId">session_id</a></code> | <code>str</code> | The ID of the session. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.connections">connections</a></code> | <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnections">GlueSessionConnections</a></code> | Specifies the connections used by the session. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.defaultArguments">default_arguments</a></code> | <code>typing.Mapping[str]</code> | A map array of key-value pairs. Max is 75 pairs. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the session. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.glueVersion">glue_version</a></code> | <code>str</code> | The Glue version determines the versions of Apache Spark and Python that Glue supports. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.idleTimeout">idle_timeout</a></code> | <code>typing.Union[int, float]</code> | The number of minutes when idle before session times out. Default is the value of Timeout. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.maxCapacity">max_capacity</a></code> | <code>typing.Union[int, float]</code> | The number of Glue data processing units (DPUs) that can be allocated when the job runs. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.numberOfWorkers">number_of_workers</a></code> | <code>typing.Union[int, float]</code> | The number of workers of a defined WorkerType to use for the session. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.requestOrigin">request_origin</a></code> | <code>str</code> | The origin of the request. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.securityConfiguration">security_configuration</a></code> | <code>str</code> | The name of the SecurityConfiguration structure to be used with the session. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueSession.GlueSessionTags">GlueSessionTags</a>]</code> | The tags belonging to the session. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | The number of minutes before session times out. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.workerType">worker_type</a></code> | <code>str</code> | The type of predefined worker that is allocated when a session runs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.command"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommand">GlueSessionCommand</a>

The SessionCommand that runs the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#command GlueSession#command}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.role"></a>

- *Type:* str

The IAM Role ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#role GlueSession#role}

---

##### `session_id`<sup>Required</sup> <a name="session_id" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.sessionId"></a>

- *Type:* str

The ID of the session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#session_id GlueSession#session_id}

---

##### `connections`<sup>Optional</sup> <a name="connections" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.connections"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnections">GlueSessionConnections</a>

Specifies the connections used by the session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#connections GlueSession#connections}

---

##### `default_arguments`<sup>Optional</sup> <a name="default_arguments" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.defaultArguments"></a>

- *Type:* typing.Mapping[str]

A map array of key-value pairs. Max is 75 pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#default_arguments GlueSession#default_arguments}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.description"></a>

- *Type:* str

The description of the session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#description GlueSession#description}

---

##### `glue_version`<sup>Optional</sup> <a name="glue_version" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.glueVersion"></a>

- *Type:* str

The Glue version determines the versions of Apache Spark and Python that Glue supports.

The GlueVersion must be greater than 2.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#glue_version GlueSession#glue_version}

---

##### `idle_timeout`<sup>Optional</sup> <a name="idle_timeout" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.idleTimeout"></a>

- *Type:* typing.Union[int, float]

The number of minutes when idle before session times out. Default is the value of Timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#idle_timeout GlueSession#idle_timeout}

---

##### `max_capacity`<sup>Optional</sup> <a name="max_capacity" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.maxCapacity"></a>

- *Type:* typing.Union[int, float]

The number of Glue data processing units (DPUs) that can be allocated when the job runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#max_capacity GlueSession#max_capacity}

---

##### `number_of_workers`<sup>Optional</sup> <a name="number_of_workers" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.numberOfWorkers"></a>

- *Type:* typing.Union[int, float]

The number of workers of a defined WorkerType to use for the session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#number_of_workers GlueSession#number_of_workers}

---

##### `request_origin`<sup>Optional</sup> <a name="request_origin" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.requestOrigin"></a>

- *Type:* str

The origin of the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#request_origin GlueSession#request_origin}

---

##### `security_configuration`<sup>Optional</sup> <a name="security_configuration" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.securityConfiguration"></a>

- *Type:* str

The name of the SecurityConfiguration structure to be used with the session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#security_configuration GlueSession#security_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueSession.GlueSessionTags">GlueSessionTags</a>]

The tags belonging to the session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#tags GlueSession#tags}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.timeout"></a>

- *Type:* typing.Union[int, float]

The number of minutes before session times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#timeout GlueSession#timeout}

---

##### `worker_type`<sup>Optional</sup> <a name="worker_type" id="@cdktn/provider-awscc.glueSession.GlueSession.Initializer.parameter.workerType"></a>

- *Type:* str

The type of predefined worker that is allocated when a session runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#worker_type GlueSession#worker_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.putCommand">put_command</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.putConnections">put_connections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.resetConnections">reset_connections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.resetDefaultArguments">reset_default_arguments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.resetGlueVersion">reset_glue_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.resetIdleTimeout">reset_idle_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.resetMaxCapacity">reset_max_capacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.resetNumberOfWorkers">reset_number_of_workers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.resetRequestOrigin">reset_request_origin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.resetSecurityConfiguration">reset_security_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.resetTimeout">reset_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.resetWorkerType">reset_worker_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueSession.GlueSession.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.glueSession.GlueSession.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.glueSession.GlueSession.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.glueSession.GlueSession.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueSession.GlueSession.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueSession.GlueSession.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.glueSession.GlueSession.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.glueSession.GlueSession.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.glueSession.GlueSession.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.glueSession.GlueSession.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.glueSession.GlueSession.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.glueSession.GlueSession.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.glueSession.GlueSession.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.glueSession.GlueSession.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueSession.GlueSession.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueSession.GlueSession.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueSession.GlueSession.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueSession.GlueSession.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueSession.GlueSession.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueSession.GlueSession.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueSession.GlueSession.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueSession.GlueSession.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueSession.GlueSession.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueSession.GlueSession.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueSession.GlueSession.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueSession.GlueSession.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueSession.GlueSession.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueSession.GlueSession.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueSession.GlueSession.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueSession.GlueSession.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueSession.GlueSession.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueSession.GlueSession.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.glueSession.GlueSession.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.glueSession.GlueSession.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueSession.GlueSession.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueSession.GlueSession.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueSession.GlueSession.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueSession.GlueSession.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.glueSession.GlueSession.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueSession.GlueSession.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.glueSession.GlueSession.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.glueSession.GlueSession.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.glueSession.GlueSession.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.glueSession.GlueSession.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueSession.GlueSession.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_command` <a name="put_command" id="@cdktn/provider-awscc.glueSession.GlueSession.putCommand"></a>

```python
def put_command(
  name: str = None,
  python_version: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueSession.GlueSession.putCommand.parameter.name"></a>

- *Type:* str

Specifies the name of the SessionCommand. Can be 'glueetl' or 'gluestreaming'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#name GlueSession#name}

---

###### `python_version`<sup>Optional</sup> <a name="python_version" id="@cdktn/provider-awscc.glueSession.GlueSession.putCommand.parameter.pythonVersion"></a>

- *Type:* str

Specifies the Python version. The Python version indicates the version supported for jobs of type Spark.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#python_version GlueSession#python_version}

---

##### `put_connections` <a name="put_connections" id="@cdktn/provider-awscc.glueSession.GlueSession.putConnections"></a>

```python
def put_connections(
  connections: typing.List[str] = None
) -> None
```

###### `connections`<sup>Optional</sup> <a name="connections" id="@cdktn/provider-awscc.glueSession.GlueSession.putConnections.parameter.connections"></a>

- *Type:* typing.List[str]

A list of connection names used by the session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#connections GlueSession#connections}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.glueSession.GlueSession.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[GlueSessionTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueSession.GlueSession.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueSession.GlueSessionTags">GlueSessionTags</a>]

---

##### `reset_connections` <a name="reset_connections" id="@cdktn/provider-awscc.glueSession.GlueSession.resetConnections"></a>

```python
def reset_connections() -> None
```

##### `reset_default_arguments` <a name="reset_default_arguments" id="@cdktn/provider-awscc.glueSession.GlueSession.resetDefaultArguments"></a>

```python
def reset_default_arguments() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.glueSession.GlueSession.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_glue_version` <a name="reset_glue_version" id="@cdktn/provider-awscc.glueSession.GlueSession.resetGlueVersion"></a>

```python
def reset_glue_version() -> None
```

##### `reset_idle_timeout` <a name="reset_idle_timeout" id="@cdktn/provider-awscc.glueSession.GlueSession.resetIdleTimeout"></a>

```python
def reset_idle_timeout() -> None
```

##### `reset_max_capacity` <a name="reset_max_capacity" id="@cdktn/provider-awscc.glueSession.GlueSession.resetMaxCapacity"></a>

```python
def reset_max_capacity() -> None
```

##### `reset_number_of_workers` <a name="reset_number_of_workers" id="@cdktn/provider-awscc.glueSession.GlueSession.resetNumberOfWorkers"></a>

```python
def reset_number_of_workers() -> None
```

##### `reset_request_origin` <a name="reset_request_origin" id="@cdktn/provider-awscc.glueSession.GlueSession.resetRequestOrigin"></a>

```python
def reset_request_origin() -> None
```

##### `reset_security_configuration` <a name="reset_security_configuration" id="@cdktn/provider-awscc.glueSession.GlueSession.resetSecurityConfiguration"></a>

```python
def reset_security_configuration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.glueSession.GlueSession.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktn/provider-awscc.glueSession.GlueSession.resetTimeout"></a>

```python
def reset_timeout() -> None
```

##### `reset_worker_type` <a name="reset_worker_type" id="@cdktn/provider-awscc.glueSession.GlueSession.resetWorkerType"></a>

```python
def reset_worker_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GlueSession resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.glueSession.GlueSession.isConstruct"></a>

```python
from cdktn_provider_awscc import glue_session

glueSession.GlueSession.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueSession.GlueSession.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.glueSession.GlueSession.isTerraformElement"></a>

```python
from cdktn_provider_awscc import glue_session

glueSession.GlueSession.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueSession.GlueSession.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.glueSession.GlueSession.isTerraformResource"></a>

```python
from cdktn_provider_awscc import glue_session

glueSession.GlueSession.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueSession.GlueSession.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.glueSession.GlueSession.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import glue_session

glueSession.GlueSession.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GlueSession resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueSession.GlueSession.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.glueSession.GlueSession.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GlueSession to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.glueSession.GlueSession.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GlueSession that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueSession.GlueSession.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GlueSession to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.command">command</a></code> | <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference">GlueSessionCommandOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.connections">connections</a></code> | <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference">GlueSessionConnectionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.progress">progress</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsList">GlueSessionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.commandInput">command_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommand">GlueSessionCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.connectionsInput">connections_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnections">GlueSessionConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.defaultArgumentsInput">default_arguments_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.glueVersionInput">glue_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.idleTimeoutInput">idle_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.maxCapacityInput">max_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.numberOfWorkersInput">number_of_workers_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.requestOriginInput">request_origin_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.securityConfigurationInput">security_configuration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.sessionIdInput">session_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueSession.GlueSessionTags">GlueSessionTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.workerTypeInput">worker_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.defaultArguments">default_arguments</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.glueVersion">glue_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.idleTimeout">idle_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.maxCapacity">max_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.numberOfWorkers">number_of_workers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.requestOrigin">request_origin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.securityConfiguration">security_configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.sessionId">session_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.workerType">worker_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.glueSession.GlueSession.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.glueSession.GlueSession.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueSession.GlueSession.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.glueSession.GlueSession.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.glueSession.GlueSession.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.glueSession.GlueSession.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.glueSession.GlueSession.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueSession.GlueSession.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueSession.GlueSession.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.glueSession.GlueSession.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.glueSession.GlueSession.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueSession.GlueSession.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueSession.GlueSession.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueSession.GlueSession.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.glueSession.GlueSession.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-awscc.glueSession.GlueSession.property.command"></a>

```python
command: GlueSessionCommandOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference">GlueSessionCommandOutputReference</a>

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktn/provider-awscc.glueSession.GlueSession.property.connections"></a>

```python
connections: GlueSessionConnectionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference">GlueSessionConnectionsOutputReference</a>

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-awscc.glueSession.GlueSession.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueSession.GlueSession.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `progress`<sup>Required</sup> <a name="progress" id="@cdktn/provider-awscc.glueSession.GlueSession.property.progress"></a>

```python
progress: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.glueSession.GlueSession.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.glueSession.GlueSession.property.tags"></a>

```python
tags: GlueSessionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsList">GlueSessionTagsList</a>

---

##### `command_input`<sup>Optional</sup> <a name="command_input" id="@cdktn/provider-awscc.glueSession.GlueSession.property.commandInput"></a>

```python
command_input: IResolvable | GlueSessionCommand
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommand">GlueSessionCommand</a>

---

##### `connections_input`<sup>Optional</sup> <a name="connections_input" id="@cdktn/provider-awscc.glueSession.GlueSession.property.connectionsInput"></a>

```python
connections_input: IResolvable | GlueSessionConnections
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnections">GlueSessionConnections</a>

---

##### `default_arguments_input`<sup>Optional</sup> <a name="default_arguments_input" id="@cdktn/provider-awscc.glueSession.GlueSession.property.defaultArgumentsInput"></a>

```python
default_arguments_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.glueSession.GlueSession.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `glue_version_input`<sup>Optional</sup> <a name="glue_version_input" id="@cdktn/provider-awscc.glueSession.GlueSession.property.glueVersionInput"></a>

```python
glue_version_input: str
```

- *Type:* str

---

##### `idle_timeout_input`<sup>Optional</sup> <a name="idle_timeout_input" id="@cdktn/provider-awscc.glueSession.GlueSession.property.idleTimeoutInput"></a>

```python
idle_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_capacity_input`<sup>Optional</sup> <a name="max_capacity_input" id="@cdktn/provider-awscc.glueSession.GlueSession.property.maxCapacityInput"></a>

```python
max_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_workers_input`<sup>Optional</sup> <a name="number_of_workers_input" id="@cdktn/provider-awscc.glueSession.GlueSession.property.numberOfWorkersInput"></a>

```python
number_of_workers_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `request_origin_input`<sup>Optional</sup> <a name="request_origin_input" id="@cdktn/provider-awscc.glueSession.GlueSession.property.requestOriginInput"></a>

```python
request_origin_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktn/provider-awscc.glueSession.GlueSession.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `security_configuration_input`<sup>Optional</sup> <a name="security_configuration_input" id="@cdktn/provider-awscc.glueSession.GlueSession.property.securityConfigurationInput"></a>

```python
security_configuration_input: str
```

- *Type:* str

---

##### `session_id_input`<sup>Optional</sup> <a name="session_id_input" id="@cdktn/provider-awscc.glueSession.GlueSession.property.sessionIdInput"></a>

```python
session_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.glueSession.GlueSession.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[GlueSessionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueSession.GlueSessionTags">GlueSessionTags</a>]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktn/provider-awscc.glueSession.GlueSession.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `worker_type_input`<sup>Optional</sup> <a name="worker_type_input" id="@cdktn/provider-awscc.glueSession.GlueSession.property.workerTypeInput"></a>

```python
worker_type_input: str
```

- *Type:* str

---

##### `default_arguments`<sup>Required</sup> <a name="default_arguments" id="@cdktn/provider-awscc.glueSession.GlueSession.property.defaultArguments"></a>

```python
default_arguments: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.glueSession.GlueSession.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `glue_version`<sup>Required</sup> <a name="glue_version" id="@cdktn/provider-awscc.glueSession.GlueSession.property.glueVersion"></a>

```python
glue_version: str
```

- *Type:* str

---

##### `idle_timeout`<sup>Required</sup> <a name="idle_timeout" id="@cdktn/provider-awscc.glueSession.GlueSession.property.idleTimeout"></a>

```python
idle_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_capacity`<sup>Required</sup> <a name="max_capacity" id="@cdktn/provider-awscc.glueSession.GlueSession.property.maxCapacity"></a>

```python
max_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_workers`<sup>Required</sup> <a name="number_of_workers" id="@cdktn/provider-awscc.glueSession.GlueSession.property.numberOfWorkers"></a>

```python
number_of_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `request_origin`<sup>Required</sup> <a name="request_origin" id="@cdktn/provider-awscc.glueSession.GlueSession.property.requestOrigin"></a>

```python
request_origin: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.glueSession.GlueSession.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `security_configuration`<sup>Required</sup> <a name="security_configuration" id="@cdktn/provider-awscc.glueSession.GlueSession.property.securityConfiguration"></a>

```python
security_configuration: str
```

- *Type:* str

---

##### `session_id`<sup>Required</sup> <a name="session_id" id="@cdktn/provider-awscc.glueSession.GlueSession.property.sessionId"></a>

```python
session_id: str
```

- *Type:* str

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-awscc.glueSession.GlueSession.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `worker_type`<sup>Required</sup> <a name="worker_type" id="@cdktn/provider-awscc.glueSession.GlueSession.property.workerType"></a>

```python
worker_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSession.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.glueSession.GlueSession.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GlueSessionCommand <a name="GlueSessionCommand" id="@cdktn/provider-awscc.glueSession.GlueSessionCommand"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueSession.GlueSessionCommand.Initializer"></a>

```python
from cdktn_provider_awscc import glue_session

glueSession.GlueSessionCommand(
  name: str = None,
  python_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommand.property.name">name</a></code> | <code>str</code> | Specifies the name of the SessionCommand. Can be 'glueetl' or 'gluestreaming'. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommand.property.pythonVersion">python_version</a></code> | <code>str</code> | Specifies the Python version. The Python version indicates the version supported for jobs of type Spark. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.glueSession.GlueSessionCommand.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the name of the SessionCommand. Can be 'glueetl' or 'gluestreaming'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#name GlueSession#name}

---

##### `python_version`<sup>Optional</sup> <a name="python_version" id="@cdktn/provider-awscc.glueSession.GlueSessionCommand.property.pythonVersion"></a>

```python
python_version: str
```

- *Type:* str

Specifies the Python version. The Python version indicates the version supported for jobs of type Spark.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#python_version GlueSession#python_version}

---

### GlueSessionConfig <a name="GlueSessionConfig" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import glue_session

glueSession.GlueSessionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  command: GlueSessionCommand,
  role: str,
  session_id: str,
  connections: GlueSessionConnections = None,
  default_arguments: typing.Mapping[str] = None,
  description: str = None,
  glue_version: str = None,
  idle_timeout: typing.Union[int, float] = None,
  max_capacity: typing.Union[int, float] = None,
  number_of_workers: typing.Union[int, float] = None,
  request_origin: str = None,
  security_configuration: str = None,
  tags: IResolvable | typing.List[GlueSessionTags] = None,
  timeout: typing.Union[int, float] = None,
  worker_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.command">command</a></code> | <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommand">GlueSessionCommand</a></code> | The SessionCommand that runs the job. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.role">role</a></code> | <code>str</code> | The IAM Role ARN. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.sessionId">session_id</a></code> | <code>str</code> | The ID of the session. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.connections">connections</a></code> | <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnections">GlueSessionConnections</a></code> | Specifies the connections used by the session. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.defaultArguments">default_arguments</a></code> | <code>typing.Mapping[str]</code> | A map array of key-value pairs. Max is 75 pairs. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.description">description</a></code> | <code>str</code> | The description of the session. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.glueVersion">glue_version</a></code> | <code>str</code> | The Glue version determines the versions of Apache Spark and Python that Glue supports. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.idleTimeout">idle_timeout</a></code> | <code>typing.Union[int, float]</code> | The number of minutes when idle before session times out. Default is the value of Timeout. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.maxCapacity">max_capacity</a></code> | <code>typing.Union[int, float]</code> | The number of Glue data processing units (DPUs) that can be allocated when the job runs. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.numberOfWorkers">number_of_workers</a></code> | <code>typing.Union[int, float]</code> | The number of workers of a defined WorkerType to use for the session. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.requestOrigin">request_origin</a></code> | <code>str</code> | The origin of the request. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.securityConfiguration">security_configuration</a></code> | <code>str</code> | The name of the SecurityConfiguration structure to be used with the session. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueSession.GlueSessionTags">GlueSessionTags</a>]</code> | The tags belonging to the session. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | The number of minutes before session times out. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.workerType">worker_type</a></code> | <code>str</code> | The type of predefined worker that is allocated when a session runs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.command"></a>

```python
command: GlueSessionCommand
```

- *Type:* <a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommand">GlueSessionCommand</a>

The SessionCommand that runs the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#command GlueSession#command}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.role"></a>

```python
role: str
```

- *Type:* str

The IAM Role ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#role GlueSession#role}

---

##### `session_id`<sup>Required</sup> <a name="session_id" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.sessionId"></a>

```python
session_id: str
```

- *Type:* str

The ID of the session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#session_id GlueSession#session_id}

---

##### `connections`<sup>Optional</sup> <a name="connections" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.connections"></a>

```python
connections: GlueSessionConnections
```

- *Type:* <a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnections">GlueSessionConnections</a>

Specifies the connections used by the session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#connections GlueSession#connections}

---

##### `default_arguments`<sup>Optional</sup> <a name="default_arguments" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.defaultArguments"></a>

```python
default_arguments: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map array of key-value pairs. Max is 75 pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#default_arguments GlueSession#default_arguments}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#description GlueSession#description}

---

##### `glue_version`<sup>Optional</sup> <a name="glue_version" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.glueVersion"></a>

```python
glue_version: str
```

- *Type:* str

The Glue version determines the versions of Apache Spark and Python that Glue supports.

The GlueVersion must be greater than 2.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#glue_version GlueSession#glue_version}

---

##### `idle_timeout`<sup>Optional</sup> <a name="idle_timeout" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.idleTimeout"></a>

```python
idle_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of minutes when idle before session times out. Default is the value of Timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#idle_timeout GlueSession#idle_timeout}

---

##### `max_capacity`<sup>Optional</sup> <a name="max_capacity" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.maxCapacity"></a>

```python
max_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of Glue data processing units (DPUs) that can be allocated when the job runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#max_capacity GlueSession#max_capacity}

---

##### `number_of_workers`<sup>Optional</sup> <a name="number_of_workers" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.numberOfWorkers"></a>

```python
number_of_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of workers of a defined WorkerType to use for the session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#number_of_workers GlueSession#number_of_workers}

---

##### `request_origin`<sup>Optional</sup> <a name="request_origin" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.requestOrigin"></a>

```python
request_origin: str
```

- *Type:* str

The origin of the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#request_origin GlueSession#request_origin}

---

##### `security_configuration`<sup>Optional</sup> <a name="security_configuration" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.securityConfiguration"></a>

```python
security_configuration: str
```

- *Type:* str

The name of the SecurityConfiguration structure to be used with the session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#security_configuration GlueSession#security_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[GlueSessionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueSession.GlueSessionTags">GlueSessionTags</a>]

The tags belonging to the session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#tags GlueSession#tags}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of minutes before session times out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#timeout GlueSession#timeout}

---

##### `worker_type`<sup>Optional</sup> <a name="worker_type" id="@cdktn/provider-awscc.glueSession.GlueSessionConfig.property.workerType"></a>

```python
worker_type: str
```

- *Type:* str

The type of predefined worker that is allocated when a session runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#worker_type GlueSession#worker_type}

---

### GlueSessionConnections <a name="GlueSessionConnections" id="@cdktn/provider-awscc.glueSession.GlueSessionConnections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueSession.GlueSessionConnections.Initializer"></a>

```python
from cdktn_provider_awscc import glue_session

glueSession.GlueSessionConnections(
  connections: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnections.property.connections">connections</a></code> | <code>typing.List[str]</code> | A list of connection names used by the session. |

---

##### `connections`<sup>Optional</sup> <a name="connections" id="@cdktn/provider-awscc.glueSession.GlueSessionConnections.property.connections"></a>

```python
connections: typing.List[str]
```

- *Type:* typing.List[str]

A list of connection names used by the session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#connections GlueSession#connections}

---

### GlueSessionTags <a name="GlueSessionTags" id="@cdktn/provider-awscc.glueSession.GlueSessionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueSession.GlueSessionTags.Initializer"></a>

```python
from cdktn_provider_awscc import glue_session

glueSession.GlueSessionTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.glueSession.GlueSessionTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#key GlueSession#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.glueSession.GlueSessionTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_session#value GlueSession#value}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueSessionCommandOutputReference <a name="GlueSessionCommandOutputReference" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_session

glueSession.GlueSessionCommandOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.resetPythonVersion">reset_python_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_python_version` <a name="reset_python_version" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.resetPythonVersion"></a>

```python
def reset_python_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.property.pythonVersionInput">python_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.property.pythonVersion">python_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommand">GlueSessionCommand</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `python_version_input`<sup>Optional</sup> <a name="python_version_input" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.property.pythonVersionInput"></a>

```python
python_version_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `python_version`<sup>Required</sup> <a name="python_version" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.property.pythonVersion"></a>

```python
python_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueSession.GlueSessionCommandOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueSessionCommand
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueSession.GlueSessionCommand">GlueSessionCommand</a>

---


### GlueSessionConnectionsOutputReference <a name="GlueSessionConnectionsOutputReference" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_session

glueSession.GlueSessionConnectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.resetConnections">reset_connections</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connections` <a name="reset_connections" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.resetConnections"></a>

```python
def reset_connections() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.property.connectionsInput">connections_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.property.connections">connections</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnections">GlueSessionConnections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connections_input`<sup>Optional</sup> <a name="connections_input" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.property.connectionsInput"></a>

```python
connections_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.property.connections"></a>

```python
connections: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueSession.GlueSessionConnectionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueSessionConnections
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueSession.GlueSessionConnections">GlueSessionConnections</a>

---


### GlueSessionTagsList <a name="GlueSessionTagsList" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import glue_session

glueSession.GlueSessionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GlueSessionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.glueSession.GlueSessionTags">GlueSessionTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GlueSessionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.glueSession.GlueSessionTags">GlueSessionTags</a>]

---


### GlueSessionTagsOutputReference <a name="GlueSessionTagsOutputReference" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import glue_session

glueSession.GlueSessionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.glueSession.GlueSessionTags">GlueSessionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.glueSession.GlueSessionTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GlueSessionTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.glueSession.GlueSessionTags">GlueSessionTags</a>

---



