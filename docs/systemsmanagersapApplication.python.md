# `systemsmanagersapApplication` Submodule <a name="`systemsmanagersapApplication` Submodule" id="@cdktn/provider-awscc.systemsmanagersapApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SystemsmanagersapApplication <a name="SystemsmanagersapApplication" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application awscc_systemsmanagersap_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer"></a>

```python
from cdktn_provider_awscc import systemsmanagersap_application

systemsmanagersapApplication.SystemsmanagersapApplication(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_id: str,
  application_type: str,
  components_info: IResolvable | typing.List[SystemsmanagersapApplicationComponentsInfo] = None,
  credentials: IResolvable | typing.List[SystemsmanagersapApplicationCredentials] = None,
  database_arn: str = None,
  instances: typing.List[str] = None,
  sap_instance_number: str = None,
  sid: str = None,
  tags: IResolvable | typing.List[SystemsmanagersapApplicationTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#application_id SystemsmanagersapApplication#application_id}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.applicationType">application_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#application_type SystemsmanagersapApplication#application_type}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.componentsInfo">components_info</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo">SystemsmanagersapApplicationComponentsInfo</a>]</code> | This is an optional parameter for component details to which the SAP ABAP application is attached, such as Web Dispatcher. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.credentials">credentials</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials">SystemsmanagersapApplicationCredentials</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#credentials SystemsmanagersapApplication#credentials}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.databaseArn">database_arn</a></code> | <code>str</code> | The ARN of the SAP HANA database. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.instances">instances</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#instances SystemsmanagersapApplication#instances}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.sapInstanceNumber">sap_instance_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#sap_instance_number SystemsmanagersapApplication#sap_instance_number}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.sid">sid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#sid SystemsmanagersapApplication#sid}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags">SystemsmanagersapApplicationTags</a>]</code> | The tags of a SystemsManagerSAP application. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.applicationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#application_id SystemsmanagersapApplication#application_id}.

---

##### `application_type`<sup>Required</sup> <a name="application_type" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.applicationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#application_type SystemsmanagersapApplication#application_type}.

---

##### `components_info`<sup>Optional</sup> <a name="components_info" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.componentsInfo"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo">SystemsmanagersapApplicationComponentsInfo</a>]

This is an optional parameter for component details to which the SAP ABAP application is attached, such as Web Dispatcher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#components_info SystemsmanagersapApplication#components_info}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.credentials"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials">SystemsmanagersapApplicationCredentials</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#credentials SystemsmanagersapApplication#credentials}.

---

##### `database_arn`<sup>Optional</sup> <a name="database_arn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.databaseArn"></a>

- *Type:* str

The ARN of the SAP HANA database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#database_arn SystemsmanagersapApplication#database_arn}

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.instances"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#instances SystemsmanagersapApplication#instances}.

---

##### `sap_instance_number`<sup>Optional</sup> <a name="sap_instance_number" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.sapInstanceNumber"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#sap_instance_number SystemsmanagersapApplication#sap_instance_number}.

---

##### `sid`<sup>Optional</sup> <a name="sid" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.sid"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#sid SystemsmanagersapApplication#sid}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags">SystemsmanagersapApplicationTags</a>]

The tags of a SystemsManagerSAP application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#tags SystemsmanagersapApplication#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putComponentsInfo">put_components_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putCredentials">put_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetComponentsInfo">reset_components_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetCredentials">reset_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetDatabaseArn">reset_database_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetInstances">reset_instances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetSapInstanceNumber">reset_sap_instance_number</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetSid">reset_sid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_components_info` <a name="put_components_info" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putComponentsInfo"></a>

```python
def put_components_info(
  value: IResolvable | typing.List[SystemsmanagersapApplicationComponentsInfo]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putComponentsInfo.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo">SystemsmanagersapApplicationComponentsInfo</a>]

---

##### `put_credentials` <a name="put_credentials" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putCredentials"></a>

```python
def put_credentials(
  value: IResolvable | typing.List[SystemsmanagersapApplicationCredentials]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putCredentials.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials">SystemsmanagersapApplicationCredentials</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[SystemsmanagersapApplicationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags">SystemsmanagersapApplicationTags</a>]

---

##### `reset_components_info` <a name="reset_components_info" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetComponentsInfo"></a>

```python
def reset_components_info() -> None
```

##### `reset_credentials` <a name="reset_credentials" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetCredentials"></a>

```python
def reset_credentials() -> None
```

##### `reset_database_arn` <a name="reset_database_arn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetDatabaseArn"></a>

```python
def reset_database_arn() -> None
```

##### `reset_instances` <a name="reset_instances" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetInstances"></a>

```python
def reset_instances() -> None
```

##### `reset_sap_instance_number` <a name="reset_sap_instance_number" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetSapInstanceNumber"></a>

```python
def reset_sap_instance_number() -> None
```

##### `reset_sid` <a name="reset_sid" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetSid"></a>

```python
def reset_sid() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a SystemsmanagersapApplication resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isConstruct"></a>

```python
from cdktn_provider_awscc import systemsmanagersap_application

systemsmanagersapApplication.SystemsmanagersapApplication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isTerraformElement"></a>

```python
from cdktn_provider_awscc import systemsmanagersap_application

systemsmanagersapApplication.SystemsmanagersapApplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isTerraformResource"></a>

```python
from cdktn_provider_awscc import systemsmanagersap_application

systemsmanagersapApplication.SystemsmanagersapApplication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import systemsmanagersap_application

systemsmanagersapApplication.SystemsmanagersapApplication.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a SystemsmanagersapApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SystemsmanagersapApplication to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SystemsmanagersapApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SystemsmanagersapApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.componentsInfo">components_info</a></code> | <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList">SystemsmanagersapApplicationComponentsInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.credentials">credentials</a></code> | <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList">SystemsmanagersapApplicationCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList">SystemsmanagersapApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.applicationTypeInput">application_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.componentsInfoInput">components_info_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo">SystemsmanagersapApplicationComponentsInfo</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.credentialsInput">credentials_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials">SystemsmanagersapApplicationCredentials</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.databaseArnInput">database_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.instancesInput">instances_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.sapInstanceNumberInput">sap_instance_number_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.sidInput">sid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags">SystemsmanagersapApplicationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.applicationType">application_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.databaseArn">database_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.instances">instances</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.sapInstanceNumber">sap_instance_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.sid">sid</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `components_info`<sup>Required</sup> <a name="components_info" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.componentsInfo"></a>

```python
components_info: SystemsmanagersapApplicationComponentsInfoList
```

- *Type:* <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList">SystemsmanagersapApplicationComponentsInfoList</a>

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.credentials"></a>

```python
credentials: SystemsmanagersapApplicationCredentialsList
```

- *Type:* <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList">SystemsmanagersapApplicationCredentialsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.tags"></a>

```python
tags: SystemsmanagersapApplicationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList">SystemsmanagersapApplicationTagsList</a>

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `application_type_input`<sup>Optional</sup> <a name="application_type_input" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.applicationTypeInput"></a>

```python
application_type_input: str
```

- *Type:* str

---

##### `components_info_input`<sup>Optional</sup> <a name="components_info_input" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.componentsInfoInput"></a>

```python
components_info_input: IResolvable | typing.List[SystemsmanagersapApplicationComponentsInfo]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo">SystemsmanagersapApplicationComponentsInfo</a>]

---

##### `credentials_input`<sup>Optional</sup> <a name="credentials_input" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.credentialsInput"></a>

```python
credentials_input: IResolvable | typing.List[SystemsmanagersapApplicationCredentials]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials">SystemsmanagersapApplicationCredentials</a>]

---

##### `database_arn_input`<sup>Optional</sup> <a name="database_arn_input" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.databaseArnInput"></a>

```python
database_arn_input: str
```

- *Type:* str

---

##### `instances_input`<sup>Optional</sup> <a name="instances_input" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.instancesInput"></a>

```python
instances_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sap_instance_number_input`<sup>Optional</sup> <a name="sap_instance_number_input" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.sapInstanceNumberInput"></a>

```python
sap_instance_number_input: str
```

- *Type:* str

---

##### `sid_input`<sup>Optional</sup> <a name="sid_input" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.sidInput"></a>

```python
sid_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[SystemsmanagersapApplicationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags">SystemsmanagersapApplicationTags</a>]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `application_type`<sup>Required</sup> <a name="application_type" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.applicationType"></a>

```python
application_type: str
```

- *Type:* str

---

##### `database_arn`<sup>Required</sup> <a name="database_arn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.databaseArn"></a>

```python
database_arn: str
```

- *Type:* str

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.instances"></a>

```python
instances: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sap_instance_number`<sup>Required</sup> <a name="sap_instance_number" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.sapInstanceNumber"></a>

```python
sap_instance_number: str
```

- *Type:* str

---

##### `sid`<sup>Required</sup> <a name="sid" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.sid"></a>

```python
sid: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SystemsmanagersapApplicationComponentsInfo <a name="SystemsmanagersapApplicationComponentsInfo" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo.Initializer"></a>

```python
from cdktn_provider_awscc import systemsmanagersap_application

systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo(
  component_type: str = None,
  ec2_instance_id: str = None,
  sid: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo.property.componentType">component_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#component_type SystemsmanagersapApplication#component_type}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo.property.ec2InstanceId">ec2_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#ec_2_instance_id SystemsmanagersapApplication#ec_2_instance_id}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo.property.sid">sid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#sid SystemsmanagersapApplication#sid}. |

---

##### `component_type`<sup>Optional</sup> <a name="component_type" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo.property.componentType"></a>

```python
component_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#component_type SystemsmanagersapApplication#component_type}.

---

##### `ec2_instance_id`<sup>Optional</sup> <a name="ec2_instance_id" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo.property.ec2InstanceId"></a>

```python
ec2_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#ec_2_instance_id SystemsmanagersapApplication#ec_2_instance_id}.

---

##### `sid`<sup>Optional</sup> <a name="sid" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo.property.sid"></a>

```python
sid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#sid SystemsmanagersapApplication#sid}.

---

### SystemsmanagersapApplicationConfig <a name="SystemsmanagersapApplicationConfig" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import systemsmanagersap_application

systemsmanagersapApplication.SystemsmanagersapApplicationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_id: str,
  application_type: str,
  components_info: IResolvable | typing.List[SystemsmanagersapApplicationComponentsInfo] = None,
  credentials: IResolvable | typing.List[SystemsmanagersapApplicationCredentials] = None,
  database_arn: str = None,
  instances: typing.List[str] = None,
  sap_instance_number: str = None,
  sid: str = None,
  tags: IResolvable | typing.List[SystemsmanagersapApplicationTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#application_id SystemsmanagersapApplication#application_id}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.applicationType">application_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#application_type SystemsmanagersapApplication#application_type}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.componentsInfo">components_info</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo">SystemsmanagersapApplicationComponentsInfo</a>]</code> | This is an optional parameter for component details to which the SAP ABAP application is attached, such as Web Dispatcher. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.credentials">credentials</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials">SystemsmanagersapApplicationCredentials</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#credentials SystemsmanagersapApplication#credentials}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.databaseArn">database_arn</a></code> | <code>str</code> | The ARN of the SAP HANA database. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.instances">instances</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#instances SystemsmanagersapApplication#instances}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.sapInstanceNumber">sap_instance_number</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#sap_instance_number SystemsmanagersapApplication#sap_instance_number}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.sid">sid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#sid SystemsmanagersapApplication#sid}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags">SystemsmanagersapApplicationTags</a>]</code> | The tags of a SystemsManagerSAP application. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#application_id SystemsmanagersapApplication#application_id}.

---

##### `application_type`<sup>Required</sup> <a name="application_type" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.applicationType"></a>

```python
application_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#application_type SystemsmanagersapApplication#application_type}.

---

##### `components_info`<sup>Optional</sup> <a name="components_info" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.componentsInfo"></a>

```python
components_info: IResolvable | typing.List[SystemsmanagersapApplicationComponentsInfo]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo">SystemsmanagersapApplicationComponentsInfo</a>]

This is an optional parameter for component details to which the SAP ABAP application is attached, such as Web Dispatcher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#components_info SystemsmanagersapApplication#components_info}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.credentials"></a>

```python
credentials: IResolvable | typing.List[SystemsmanagersapApplicationCredentials]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials">SystemsmanagersapApplicationCredentials</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#credentials SystemsmanagersapApplication#credentials}.

---

##### `database_arn`<sup>Optional</sup> <a name="database_arn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.databaseArn"></a>

```python
database_arn: str
```

- *Type:* str

The ARN of the SAP HANA database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#database_arn SystemsmanagersapApplication#database_arn}

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.instances"></a>

```python
instances: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#instances SystemsmanagersapApplication#instances}.

---

##### `sap_instance_number`<sup>Optional</sup> <a name="sap_instance_number" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.sapInstanceNumber"></a>

```python
sap_instance_number: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#sap_instance_number SystemsmanagersapApplication#sap_instance_number}.

---

##### `sid`<sup>Optional</sup> <a name="sid" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.sid"></a>

```python
sid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#sid SystemsmanagersapApplication#sid}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[SystemsmanagersapApplicationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags">SystemsmanagersapApplicationTags</a>]

The tags of a SystemsManagerSAP application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#tags SystemsmanagersapApplication#tags}

---

### SystemsmanagersapApplicationCredentials <a name="SystemsmanagersapApplicationCredentials" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials.Initializer"></a>

```python
from cdktn_provider_awscc import systemsmanagersap_application

systemsmanagersapApplication.SystemsmanagersapApplicationCredentials(
  credential_type: str = None,
  database_name: str = None,
  secret_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials.property.credentialType">credential_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#credential_type SystemsmanagersapApplication#credential_type}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#database_name SystemsmanagersapApplication#database_name}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials.property.secretId">secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#secret_id SystemsmanagersapApplication#secret_id}. |

---

##### `credential_type`<sup>Optional</sup> <a name="credential_type" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials.property.credentialType"></a>

```python
credential_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#credential_type SystemsmanagersapApplication#credential_type}.

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#database_name SystemsmanagersapApplication#database_name}.

---

##### `secret_id`<sup>Optional</sup> <a name="secret_id" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#secret_id SystemsmanagersapApplication#secret_id}.

---

### SystemsmanagersapApplicationTags <a name="SystemsmanagersapApplicationTags" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags.Initializer"></a>

```python
from cdktn_provider_awscc import systemsmanagersap_application

systemsmanagersapApplication.SystemsmanagersapApplicationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#key SystemsmanagersapApplication#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/systemsmanagersap_application#value SystemsmanagersapApplication#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SystemsmanagersapApplicationComponentsInfoList <a name="SystemsmanagersapApplicationComponentsInfoList" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.Initializer"></a>

```python
from cdktn_provider_awscc import systemsmanagersap_application

systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SystemsmanagersapApplicationComponentsInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo">SystemsmanagersapApplicationComponentsInfo</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SystemsmanagersapApplicationComponentsInfo]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo">SystemsmanagersapApplicationComponentsInfo</a>]

---


### SystemsmanagersapApplicationComponentsInfoOutputReference <a name="SystemsmanagersapApplicationComponentsInfoOutputReference" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import systemsmanagersap_application

systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resetComponentType">reset_component_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resetEc2InstanceId">reset_ec2_instance_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resetSid">reset_sid</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_component_type` <a name="reset_component_type" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resetComponentType"></a>

```python
def reset_component_type() -> None
```

##### `reset_ec2_instance_id` <a name="reset_ec2_instance_id" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resetEc2InstanceId"></a>

```python
def reset_ec2_instance_id() -> None
```

##### `reset_sid` <a name="reset_sid" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resetSid"></a>

```python
def reset_sid() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.componentTypeInput">component_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.ec2InstanceIdInput">ec2_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.sidInput">sid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.componentType">component_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.ec2InstanceId">ec2_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.sid">sid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo">SystemsmanagersapApplicationComponentsInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `component_type_input`<sup>Optional</sup> <a name="component_type_input" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.componentTypeInput"></a>

```python
component_type_input: str
```

- *Type:* str

---

##### `ec2_instance_id_input`<sup>Optional</sup> <a name="ec2_instance_id_input" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.ec2InstanceIdInput"></a>

```python
ec2_instance_id_input: str
```

- *Type:* str

---

##### `sid_input`<sup>Optional</sup> <a name="sid_input" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.sidInput"></a>

```python
sid_input: str
```

- *Type:* str

---

##### `component_type`<sup>Required</sup> <a name="component_type" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.componentType"></a>

```python
component_type: str
```

- *Type:* str

---

##### `ec2_instance_id`<sup>Required</sup> <a name="ec2_instance_id" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.ec2InstanceId"></a>

```python
ec2_instance_id: str
```

- *Type:* str

---

##### `sid`<sup>Required</sup> <a name="sid" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.sid"></a>

```python
sid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SystemsmanagersapApplicationComponentsInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo">SystemsmanagersapApplicationComponentsInfo</a>

---


### SystemsmanagersapApplicationCredentialsList <a name="SystemsmanagersapApplicationCredentialsList" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.Initializer"></a>

```python
from cdktn_provider_awscc import systemsmanagersap_application

systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SystemsmanagersapApplicationCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials">SystemsmanagersapApplicationCredentials</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SystemsmanagersapApplicationCredentials]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials">SystemsmanagersapApplicationCredentials</a>]

---


### SystemsmanagersapApplicationCredentialsOutputReference <a name="SystemsmanagersapApplicationCredentialsOutputReference" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import systemsmanagersap_application

systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resetCredentialType">reset_credential_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resetSecretId">reset_secret_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_credential_type` <a name="reset_credential_type" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resetCredentialType"></a>

```python
def reset_credential_type() -> None
```

##### `reset_database_name` <a name="reset_database_name" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_secret_id` <a name="reset_secret_id" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resetSecretId"></a>

```python
def reset_secret_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.credentialTypeInput">credential_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.secretIdInput">secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.credentialType">credential_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials">SystemsmanagersapApplicationCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credential_type_input`<sup>Optional</sup> <a name="credential_type_input" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.credentialTypeInput"></a>

```python
credential_type_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `secret_id_input`<sup>Optional</sup> <a name="secret_id_input" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.secretIdInput"></a>

```python
secret_id_input: str
```

- *Type:* str

---

##### `credential_type`<sup>Required</sup> <a name="credential_type" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.credentialType"></a>

```python
credential_type: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SystemsmanagersapApplicationCredentials
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials">SystemsmanagersapApplicationCredentials</a>

---


### SystemsmanagersapApplicationTagsList <a name="SystemsmanagersapApplicationTagsList" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import systemsmanagersap_application

systemsmanagersapApplication.SystemsmanagersapApplicationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SystemsmanagersapApplicationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags">SystemsmanagersapApplicationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[SystemsmanagersapApplicationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags">SystemsmanagersapApplicationTags</a>]

---


### SystemsmanagersapApplicationTagsOutputReference <a name="SystemsmanagersapApplicationTagsOutputReference" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import systemsmanagersap_application

systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags">SystemsmanagersapApplicationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | SystemsmanagersapApplicationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags">SystemsmanagersapApplicationTags</a>

---



