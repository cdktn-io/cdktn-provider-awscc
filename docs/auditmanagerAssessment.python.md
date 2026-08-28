# `auditmanagerAssessment` Submodule <a name="`auditmanagerAssessment` Submodule" id="@cdktn/provider-awscc.auditmanagerAssessment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuditmanagerAssessment <a name="AuditmanagerAssessment" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment awscc_auditmanager_assessment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer"></a>

```python
from cdktn_provider_awscc import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessment(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  assessment_reports_destination: AuditmanagerAssessmentAssessmentReportsDestination = None,
  aws_account: AuditmanagerAssessmentAwsAccount = None,
  delegations: IResolvable | typing.List[AuditmanagerAssessmentDelegations] = None,
  description: str = None,
  framework_id: str = None,
  name: str = None,
  roles: IResolvable | typing.List[AuditmanagerAssessmentRoles] = None,
  scope: AuditmanagerAssessmentScope = None,
  status: str = None,
  tags: IResolvable | typing.List[AuditmanagerAssessmentTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.assessmentReportsDestination">assessment_reports_destination</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination">AuditmanagerAssessmentAssessmentReportsDestination</a></code> | The destination in which evidence reports are stored for the specified assessment. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.awsAccount">aws_account</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount">AuditmanagerAssessmentAwsAccount</a></code> | The AWS account associated with the assessment. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.delegations">delegations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations">AuditmanagerAssessmentDelegations</a>]</code> | The list of delegations. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the specified assessment. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.frameworkId">framework_id</a></code> | <code>str</code> | The identifier for the specified framework. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the related assessment. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.roles">roles</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>]</code> | The list of roles for the specified assessment. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.scope">scope</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScope">AuditmanagerAssessmentScope</a></code> | The wrapper that contains the AWS accounts and AWS services in scope for the assessment. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.status">status</a></code> | <code>str</code> | The status of the specified assessment. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags">AuditmanagerAssessmentTags</a>]</code> | The tags associated with the assessment. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `assessment_reports_destination`<sup>Optional</sup> <a name="assessment_reports_destination" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.assessmentReportsDestination"></a>

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination">AuditmanagerAssessmentAssessmentReportsDestination</a>

The destination in which evidence reports are stored for the specified assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#assessment_reports_destination AuditmanagerAssessment#assessment_reports_destination}

---

##### `aws_account`<sup>Optional</sup> <a name="aws_account" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.awsAccount"></a>

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount">AuditmanagerAssessmentAwsAccount</a>

The AWS account associated with the assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#aws_account AuditmanagerAssessment#aws_account}

---

##### `delegations`<sup>Optional</sup> <a name="delegations" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.delegations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations">AuditmanagerAssessmentDelegations</a>]

The list of delegations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#delegations AuditmanagerAssessment#delegations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.description"></a>

- *Type:* str

The description of the specified assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#description AuditmanagerAssessment#description}

---

##### `framework_id`<sup>Optional</sup> <a name="framework_id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.frameworkId"></a>

- *Type:* str

The identifier for the specified framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#framework_id AuditmanagerAssessment#framework_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.name"></a>

- *Type:* str

The name of the related assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#name AuditmanagerAssessment#name}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.roles"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>]

The list of roles for the specified assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#roles AuditmanagerAssessment#roles}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.scope"></a>

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScope">AuditmanagerAssessmentScope</a>

The wrapper that contains the AWS accounts and AWS services in scope for the assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#scope AuditmanagerAssessment#scope}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.status"></a>

- *Type:* str

The status of the specified assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#status AuditmanagerAssessment#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags">AuditmanagerAssessmentTags</a>]

The tags associated with the assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#tags AuditmanagerAssessment#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putAssessmentReportsDestination">put_assessment_reports_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putAwsAccount">put_aws_account</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putDelegations">put_delegations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putRoles">put_roles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putScope">put_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetAssessmentReportsDestination">reset_assessment_reports_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetAwsAccount">reset_aws_account</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetDelegations">reset_delegations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetFrameworkId">reset_framework_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetRoles">reset_roles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetScope">reset_scope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_assessment_reports_destination` <a name="put_assessment_reports_destination" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putAssessmentReportsDestination"></a>

```python
def put_assessment_reports_destination(
  destination: str = None,
  destination_type: str = None
) -> None
```

###### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putAssessmentReportsDestination.parameter.destination"></a>

- *Type:* str

The URL of the specified Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#destination AuditmanagerAssessment#destination}

---

###### `destination_type`<sup>Optional</sup> <a name="destination_type" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putAssessmentReportsDestination.parameter.destinationType"></a>

- *Type:* str

The destination type, such as Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#destination_type AuditmanagerAssessment#destination_type}

---

##### `put_aws_account` <a name="put_aws_account" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putAwsAccount"></a>

```python
def put_aws_account(
  email_address: str = None,
  id: str = None,
  name: str = None
) -> None
```

###### `email_address`<sup>Optional</sup> <a name="email_address" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putAwsAccount.parameter.emailAddress"></a>

- *Type:* str

The unique identifier for the email account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#email_address AuditmanagerAssessment#email_address}

---

###### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putAwsAccount.parameter.id"></a>

- *Type:* str

The identifier for the specified AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#id AuditmanagerAssessment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putAwsAccount.parameter.name"></a>

- *Type:* str

The name of the specified AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#name AuditmanagerAssessment#name}

---

##### `put_delegations` <a name="put_delegations" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putDelegations"></a>

```python
def put_delegations(
  value: IResolvable | typing.List[AuditmanagerAssessmentDelegations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putDelegations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations">AuditmanagerAssessmentDelegations</a>]

---

##### `put_roles` <a name="put_roles" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putRoles"></a>

```python
def put_roles(
  value: IResolvable | typing.List[AuditmanagerAssessmentRoles]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putRoles.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>]

---

##### `put_scope` <a name="put_scope" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putScope"></a>

```python
def put_scope(
  aws_accounts: IResolvable | typing.List[AuditmanagerAssessmentScopeAwsAccounts] = None,
  aws_services: IResolvable | typing.List[AuditmanagerAssessmentScopeAwsServices] = None
) -> None
```

###### `aws_accounts`<sup>Optional</sup> <a name="aws_accounts" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putScope.parameter.awsAccounts"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a>]

The AWS accounts included in scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#aws_accounts AuditmanagerAssessment#aws_accounts}

---

###### `aws_services`<sup>Optional</sup> <a name="aws_services" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putScope.parameter.awsServices"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a>]

The AWS services included in scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#aws_services AuditmanagerAssessment#aws_services}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[AuditmanagerAssessmentTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags">AuditmanagerAssessmentTags</a>]

---

##### `reset_assessment_reports_destination` <a name="reset_assessment_reports_destination" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetAssessmentReportsDestination"></a>

```python
def reset_assessment_reports_destination() -> None
```

##### `reset_aws_account` <a name="reset_aws_account" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetAwsAccount"></a>

```python
def reset_aws_account() -> None
```

##### `reset_delegations` <a name="reset_delegations" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetDelegations"></a>

```python
def reset_delegations() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_framework_id` <a name="reset_framework_id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetFrameworkId"></a>

```python
def reset_framework_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_roles` <a name="reset_roles" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetRoles"></a>

```python
def reset_roles() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetScope"></a>

```python
def reset_scope() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AuditmanagerAssessment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.isConstruct"></a>

```python
from cdktn_provider_awscc import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.isTerraformElement"></a>

```python
from cdktn_provider_awscc import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.isTerraformResource"></a>

```python
from cdktn_provider_awscc import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AuditmanagerAssessment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AuditmanagerAssessment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AuditmanagerAssessment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AuditmanagerAssessment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.assessmentId">assessment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.assessmentReportsDestination">assessment_reports_destination</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference">AuditmanagerAssessmentAssessmentReportsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.awsAccount">aws_account</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference">AuditmanagerAssessmentAwsAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.creationTime">creation_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.delegations">delegations</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList">AuditmanagerAssessmentDelegationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.roles">roles</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList">AuditmanagerAssessmentRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference">AuditmanagerAssessmentScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList">AuditmanagerAssessmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.assessmentReportsDestinationInput">assessment_reports_destination_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination">AuditmanagerAssessmentAssessmentReportsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.awsAccountInput">aws_account_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount">AuditmanagerAssessmentAwsAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.delegationsInput">delegations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations">AuditmanagerAssessmentDelegations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.frameworkIdInput">framework_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.rolesInput">roles_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.scopeInput">scope_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScope">AuditmanagerAssessmentScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags">AuditmanagerAssessmentTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.frameworkId">framework_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `assessment_id`<sup>Required</sup> <a name="assessment_id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.assessmentId"></a>

```python
assessment_id: str
```

- *Type:* str

---

##### `assessment_reports_destination`<sup>Required</sup> <a name="assessment_reports_destination" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.assessmentReportsDestination"></a>

```python
assessment_reports_destination: AuditmanagerAssessmentAssessmentReportsDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference">AuditmanagerAssessmentAssessmentReportsDestinationOutputReference</a>

---

##### `aws_account`<sup>Required</sup> <a name="aws_account" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.awsAccount"></a>

```python
aws_account: AuditmanagerAssessmentAwsAccountOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference">AuditmanagerAssessmentAwsAccountOutputReference</a>

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.creationTime"></a>

```python
creation_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delegations`<sup>Required</sup> <a name="delegations" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.delegations"></a>

```python
delegations: AuditmanagerAssessmentDelegationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList">AuditmanagerAssessmentDelegationsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.roles"></a>

```python
roles: AuditmanagerAssessmentRolesList
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList">AuditmanagerAssessmentRolesList</a>

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.scope"></a>

```python
scope: AuditmanagerAssessmentScopeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference">AuditmanagerAssessmentScopeOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.tags"></a>

```python
tags: AuditmanagerAssessmentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList">AuditmanagerAssessmentTagsList</a>

---

##### `assessment_reports_destination_input`<sup>Optional</sup> <a name="assessment_reports_destination_input" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.assessmentReportsDestinationInput"></a>

```python
assessment_reports_destination_input: IResolvable | AuditmanagerAssessmentAssessmentReportsDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination">AuditmanagerAssessmentAssessmentReportsDestination</a>

---

##### `aws_account_input`<sup>Optional</sup> <a name="aws_account_input" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.awsAccountInput"></a>

```python
aws_account_input: IResolvable | AuditmanagerAssessmentAwsAccount
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount">AuditmanagerAssessmentAwsAccount</a>

---

##### `delegations_input`<sup>Optional</sup> <a name="delegations_input" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.delegationsInput"></a>

```python
delegations_input: IResolvable | typing.List[AuditmanagerAssessmentDelegations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations">AuditmanagerAssessmentDelegations</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `framework_id_input`<sup>Optional</sup> <a name="framework_id_input" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.frameworkIdInput"></a>

```python
framework_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `roles_input`<sup>Optional</sup> <a name="roles_input" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.rolesInput"></a>

```python
roles_input: IResolvable | typing.List[AuditmanagerAssessmentRoles]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>]

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.scopeInput"></a>

```python
scope_input: IResolvable | AuditmanagerAssessmentScope
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScope">AuditmanagerAssessmentScope</a>

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[AuditmanagerAssessmentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags">AuditmanagerAssessmentTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `framework_id`<sup>Required</sup> <a name="framework_id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.frameworkId"></a>

```python
framework_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AuditmanagerAssessmentAssessmentReportsDestination <a name="AuditmanagerAssessmentAssessmentReportsDestination" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination.Initializer"></a>

```python
from cdktn_provider_awscc import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination(
  destination: str = None,
  destination_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination.property.destination">destination</a></code> | <code>str</code> | The URL of the specified Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination.property.destinationType">destination_type</a></code> | <code>str</code> | The destination type, such as Amazon S3. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination.property.destination"></a>

```python
destination: str
```

- *Type:* str

The URL of the specified Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#destination AuditmanagerAssessment#destination}

---

##### `destination_type`<sup>Optional</sup> <a name="destination_type" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination.property.destinationType"></a>

```python
destination_type: str
```

- *Type:* str

The destination type, such as Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#destination_type AuditmanagerAssessment#destination_type}

---

### AuditmanagerAssessmentAwsAccount <a name="AuditmanagerAssessmentAwsAccount" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount.Initializer"></a>

```python
from cdktn_provider_awscc import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessmentAwsAccount(
  email_address: str = None,
  id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount.property.emailAddress">email_address</a></code> | <code>str</code> | The unique identifier for the email account. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount.property.id">id</a></code> | <code>str</code> | The identifier for the specified AWS account. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount.property.name">name</a></code> | <code>str</code> | The name of the specified AWS account. |

---

##### `email_address`<sup>Optional</sup> <a name="email_address" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

The unique identifier for the email account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#email_address AuditmanagerAssessment#email_address}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount.property.id"></a>

```python
id: str
```

- *Type:* str

The identifier for the specified AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#id AuditmanagerAssessment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the specified AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#name AuditmanagerAssessment#name}

---

### AuditmanagerAssessmentConfig <a name="AuditmanagerAssessmentConfig" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessmentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  assessment_reports_destination: AuditmanagerAssessmentAssessmentReportsDestination = None,
  aws_account: AuditmanagerAssessmentAwsAccount = None,
  delegations: IResolvable | typing.List[AuditmanagerAssessmentDelegations] = None,
  description: str = None,
  framework_id: str = None,
  name: str = None,
  roles: IResolvable | typing.List[AuditmanagerAssessmentRoles] = None,
  scope: AuditmanagerAssessmentScope = None,
  status: str = None,
  tags: IResolvable | typing.List[AuditmanagerAssessmentTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.assessmentReportsDestination">assessment_reports_destination</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination">AuditmanagerAssessmentAssessmentReportsDestination</a></code> | The destination in which evidence reports are stored for the specified assessment. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.awsAccount">aws_account</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount">AuditmanagerAssessmentAwsAccount</a></code> | The AWS account associated with the assessment. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.delegations">delegations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations">AuditmanagerAssessmentDelegations</a>]</code> | The list of delegations. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.description">description</a></code> | <code>str</code> | The description of the specified assessment. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.frameworkId">framework_id</a></code> | <code>str</code> | The identifier for the specified framework. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.name">name</a></code> | <code>str</code> | The name of the related assessment. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.roles">roles</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>]</code> | The list of roles for the specified assessment. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.scope">scope</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScope">AuditmanagerAssessmentScope</a></code> | The wrapper that contains the AWS accounts and AWS services in scope for the assessment. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.status">status</a></code> | <code>str</code> | The status of the specified assessment. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags">AuditmanagerAssessmentTags</a>]</code> | The tags associated with the assessment. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `assessment_reports_destination`<sup>Optional</sup> <a name="assessment_reports_destination" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.assessmentReportsDestination"></a>

```python
assessment_reports_destination: AuditmanagerAssessmentAssessmentReportsDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination">AuditmanagerAssessmentAssessmentReportsDestination</a>

The destination in which evidence reports are stored for the specified assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#assessment_reports_destination AuditmanagerAssessment#assessment_reports_destination}

---

##### `aws_account`<sup>Optional</sup> <a name="aws_account" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.awsAccount"></a>

```python
aws_account: AuditmanagerAssessmentAwsAccount
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount">AuditmanagerAssessmentAwsAccount</a>

The AWS account associated with the assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#aws_account AuditmanagerAssessment#aws_account}

---

##### `delegations`<sup>Optional</sup> <a name="delegations" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.delegations"></a>

```python
delegations: IResolvable | typing.List[AuditmanagerAssessmentDelegations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations">AuditmanagerAssessmentDelegations</a>]

The list of delegations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#delegations AuditmanagerAssessment#delegations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the specified assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#description AuditmanagerAssessment#description}

---

##### `framework_id`<sup>Optional</sup> <a name="framework_id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.frameworkId"></a>

```python
framework_id: str
```

- *Type:* str

The identifier for the specified framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#framework_id AuditmanagerAssessment#framework_id}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the related assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#name AuditmanagerAssessment#name}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.roles"></a>

```python
roles: IResolvable | typing.List[AuditmanagerAssessmentRoles]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>]

The list of roles for the specified assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#roles AuditmanagerAssessment#roles}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.scope"></a>

```python
scope: AuditmanagerAssessmentScope
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScope">AuditmanagerAssessmentScope</a>

The wrapper that contains the AWS accounts and AWS services in scope for the assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#scope AuditmanagerAssessment#scope}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.status"></a>

```python
status: str
```

- *Type:* str

The status of the specified assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#status AuditmanagerAssessment#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[AuditmanagerAssessmentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags">AuditmanagerAssessmentTags</a>]

The tags associated with the assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#tags AuditmanagerAssessment#tags}

---

### AuditmanagerAssessmentDelegations <a name="AuditmanagerAssessmentDelegations" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.Initializer"></a>

```python
from cdktn_provider_awscc import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessmentDelegations(
  assessment_id: str = None,
  assessment_name: str = None,
  comment: str = None,
  control_set_id: str = None,
  created_by: str = None,
  creation_time: typing.Union[int, float] = None,
  id: str = None,
  last_updated: typing.Union[int, float] = None,
  role_arn: str = None,
  role_type: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.assessmentId">assessment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#assessment_id AuditmanagerAssessment#assessment_id}. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.assessmentName">assessment_name</a></code> | <code>str</code> | The name of the related assessment. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.comment">comment</a></code> | <code>str</code> | The comment related to the delegation. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.controlSetId">control_set_id</a></code> | <code>str</code> | The identifier for the specified control set. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.createdBy">created_by</a></code> | <code>str</code> | The IAM user or role that performed the action. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.creationTime">creation_time</a></code> | <code>typing.Union[int, float]</code> | The sequence of characters that identifies when the event occurred. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#id AuditmanagerAssessment#id}. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.lastUpdated">last_updated</a></code> | <code>typing.Union[int, float]</code> | The sequence of characters that identifies when the event occurred. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.roleArn">role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the IAM user or role. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.roleType">role_type</a></code> | <code>str</code> | The IAM role type. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.status">status</a></code> | <code>str</code> | The status of the delegation. |

---

##### `assessment_id`<sup>Optional</sup> <a name="assessment_id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.assessmentId"></a>

```python
assessment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#assessment_id AuditmanagerAssessment#assessment_id}.

---

##### `assessment_name`<sup>Optional</sup> <a name="assessment_name" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.assessmentName"></a>

```python
assessment_name: str
```

- *Type:* str

The name of the related assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#assessment_name AuditmanagerAssessment#assessment_name}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.comment"></a>

```python
comment: str
```

- *Type:* str

The comment related to the delegation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#comment AuditmanagerAssessment#comment}

---

##### `control_set_id`<sup>Optional</sup> <a name="control_set_id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.controlSetId"></a>

```python
control_set_id: str
```

- *Type:* str

The identifier for the specified control set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#control_set_id AuditmanagerAssessment#control_set_id}

---

##### `created_by`<sup>Optional</sup> <a name="created_by" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

The IAM user or role that performed the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#created_by AuditmanagerAssessment#created_by}

---

##### `creation_time`<sup>Optional</sup> <a name="creation_time" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.creationTime"></a>

```python
creation_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The sequence of characters that identifies when the event occurred.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#creation_time AuditmanagerAssessment#creation_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#id AuditmanagerAssessment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `last_updated`<sup>Optional</sup> <a name="last_updated" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.lastUpdated"></a>

```python
last_updated: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The sequence of characters that identifies when the event occurred.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#last_updated AuditmanagerAssessment#last_updated}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the IAM user or role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#role_arn AuditmanagerAssessment#role_arn}

---

##### `role_type`<sup>Optional</sup> <a name="role_type" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.roleType"></a>

```python
role_type: str
```

- *Type:* str

The IAM role type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#role_type AuditmanagerAssessment#role_type}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.status"></a>

```python
status: str
```

- *Type:* str

The status of the delegation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#status AuditmanagerAssessment#status}

---

### AuditmanagerAssessmentRoles <a name="AuditmanagerAssessmentRoles" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles.Initializer"></a>

```python
from cdktn_provider_awscc import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessmentRoles(
  role_arn: str = None,
  role_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles.property.roleArn">role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the IAM user or role. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles.property.roleType">role_type</a></code> | <code>str</code> | The IAM role type. |

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the IAM user or role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#role_arn AuditmanagerAssessment#role_arn}

---

##### `role_type`<sup>Optional</sup> <a name="role_type" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles.property.roleType"></a>

```python
role_type: str
```

- *Type:* str

The IAM role type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#role_type AuditmanagerAssessment#role_type}

---

### AuditmanagerAssessmentScope <a name="AuditmanagerAssessmentScope" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScope.Initializer"></a>

```python
from cdktn_provider_awscc import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessmentScope(
  aws_accounts: IResolvable | typing.List[AuditmanagerAssessmentScopeAwsAccounts] = None,
  aws_services: IResolvable | typing.List[AuditmanagerAssessmentScopeAwsServices] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScope.property.awsAccounts">aws_accounts</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a>]</code> | The AWS accounts included in scope. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScope.property.awsServices">aws_services</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a>]</code> | The AWS services included in scope. |

---

##### `aws_accounts`<sup>Optional</sup> <a name="aws_accounts" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScope.property.awsAccounts"></a>

```python
aws_accounts: IResolvable | typing.List[AuditmanagerAssessmentScopeAwsAccounts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a>]

The AWS accounts included in scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#aws_accounts AuditmanagerAssessment#aws_accounts}

---

##### `aws_services`<sup>Optional</sup> <a name="aws_services" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScope.property.awsServices"></a>

```python
aws_services: IResolvable | typing.List[AuditmanagerAssessmentScopeAwsServices]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a>]

The AWS services included in scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#aws_services AuditmanagerAssessment#aws_services}

---

### AuditmanagerAssessmentScopeAwsAccounts <a name="AuditmanagerAssessmentScopeAwsAccounts" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts.Initializer"></a>

```python
from cdktn_provider_awscc import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts(
  email_address: str = None,
  id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts.property.emailAddress">email_address</a></code> | <code>str</code> | The unique identifier for the email account. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts.property.id">id</a></code> | <code>str</code> | The identifier for the specified AWS account. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts.property.name">name</a></code> | <code>str</code> | The name of the specified AWS account. |

---

##### `email_address`<sup>Optional</sup> <a name="email_address" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

The unique identifier for the email account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#email_address AuditmanagerAssessment#email_address}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts.property.id"></a>

```python
id: str
```

- *Type:* str

The identifier for the specified AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#id AuditmanagerAssessment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the specified AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#name AuditmanagerAssessment#name}

---

### AuditmanagerAssessmentScopeAwsServices <a name="AuditmanagerAssessmentScopeAwsServices" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices.Initializer"></a>

```python
from cdktn_provider_awscc import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices(
  service_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices.property.serviceName">service_name</a></code> | <code>str</code> | The name of the AWS service. |

---

##### `service_name`<sup>Optional</sup> <a name="service_name" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

The name of the AWS service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#service_name AuditmanagerAssessment#service_name}

---

### AuditmanagerAssessmentTags <a name="AuditmanagerAssessmentTags" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags.Initializer"></a>

```python
from cdktn_provider_awscc import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessmentTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#key AuditmanagerAssessment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#value AuditmanagerAssessment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### AuditmanagerAssessmentAssessmentReportsDestinationOutputReference <a name="AuditmanagerAssessmentAssessmentReportsDestinationOutputReference" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.resetDestination">reset_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.resetDestinationType">reset_destination_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination` <a name="reset_destination" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.resetDestination"></a>

```python
def reset_destination() -> None
```

##### `reset_destination_type` <a name="reset_destination_type" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.resetDestinationType"></a>

```python
def reset_destination_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destinationTypeInput">destination_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destinationType">destination_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination">AuditmanagerAssessmentAssessmentReportsDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `destination_type_input`<sup>Optional</sup> <a name="destination_type_input" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destinationTypeInput"></a>

```python
destination_type_input: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `destination_type`<sup>Required</sup> <a name="destination_type" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destinationType"></a>

```python
destination_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AuditmanagerAssessmentAssessmentReportsDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination">AuditmanagerAssessmentAssessmentReportsDestination</a>

---


### AuditmanagerAssessmentAwsAccountOutputReference <a name="AuditmanagerAssessmentAwsAccountOutputReference" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.resetEmailAddress">reset_email_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_email_address` <a name="reset_email_address" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.resetEmailAddress"></a>

```python
def reset_email_address() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.emailAddressInput">email_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.emailAddress">email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount">AuditmanagerAssessmentAwsAccount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_address_input`<sup>Optional</sup> <a name="email_address_input" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.emailAddressInput"></a>

```python
email_address_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AuditmanagerAssessmentAwsAccount
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount">AuditmanagerAssessmentAwsAccount</a>

---


### AuditmanagerAssessmentDelegationsList <a name="AuditmanagerAssessmentDelegationsList" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.Initializer"></a>

```python
from cdktn_provider_awscc import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessmentDelegationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AuditmanagerAssessmentDelegationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations">AuditmanagerAssessmentDelegations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AuditmanagerAssessmentDelegations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations">AuditmanagerAssessmentDelegations</a>]

---


### AuditmanagerAssessmentDelegationsOutputReference <a name="AuditmanagerAssessmentDelegationsOutputReference" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetAssessmentId">reset_assessment_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetAssessmentName">reset_assessment_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetControlSetId">reset_control_set_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetCreatedBy">reset_created_by</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetCreationTime">reset_creation_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetLastUpdated">reset_last_updated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetRoleType">reset_role_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_assessment_id` <a name="reset_assessment_id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetAssessmentId"></a>

```python
def reset_assessment_id() -> None
```

##### `reset_assessment_name` <a name="reset_assessment_name" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetAssessmentName"></a>

```python
def reset_assessment_name() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_control_set_id` <a name="reset_control_set_id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetControlSetId"></a>

```python
def reset_control_set_id() -> None
```

##### `reset_created_by` <a name="reset_created_by" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetCreatedBy"></a>

```python
def reset_created_by() -> None
```

##### `reset_creation_time` <a name="reset_creation_time" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetCreationTime"></a>

```python
def reset_creation_time() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_last_updated` <a name="reset_last_updated" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetLastUpdated"></a>

```python
def reset_last_updated() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_role_type` <a name="reset_role_type" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetRoleType"></a>

```python
def reset_role_type() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.assessmentIdInput">assessment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.assessmentNameInput">assessment_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.controlSetIdInput">control_set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.createdByInput">created_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.creationTimeInput">creation_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.lastUpdatedInput">last_updated_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.roleTypeInput">role_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.assessmentId">assessment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.assessmentName">assessment_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.controlSetId">control_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.creationTime">creation_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.lastUpdated">last_updated</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.roleType">role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations">AuditmanagerAssessmentDelegations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `assessment_id_input`<sup>Optional</sup> <a name="assessment_id_input" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.assessmentIdInput"></a>

```python
assessment_id_input: str
```

- *Type:* str

---

##### `assessment_name_input`<sup>Optional</sup> <a name="assessment_name_input" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.assessmentNameInput"></a>

```python
assessment_name_input: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `control_set_id_input`<sup>Optional</sup> <a name="control_set_id_input" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.controlSetIdInput"></a>

```python
control_set_id_input: str
```

- *Type:* str

---

##### `created_by_input`<sup>Optional</sup> <a name="created_by_input" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.createdByInput"></a>

```python
created_by_input: str
```

- *Type:* str

---

##### `creation_time_input`<sup>Optional</sup> <a name="creation_time_input" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.creationTimeInput"></a>

```python
creation_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `last_updated_input`<sup>Optional</sup> <a name="last_updated_input" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.lastUpdatedInput"></a>

```python
last_updated_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `role_type_input`<sup>Optional</sup> <a name="role_type_input" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.roleTypeInput"></a>

```python
role_type_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `assessment_id`<sup>Required</sup> <a name="assessment_id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.assessmentId"></a>

```python
assessment_id: str
```

- *Type:* str

---

##### `assessment_name`<sup>Required</sup> <a name="assessment_name" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.assessmentName"></a>

```python
assessment_name: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `control_set_id`<sup>Required</sup> <a name="control_set_id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.controlSetId"></a>

```python
control_set_id: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.creationTime"></a>

```python
creation_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated`<sup>Required</sup> <a name="last_updated" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.lastUpdated"></a>

```python
last_updated: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `role_type`<sup>Required</sup> <a name="role_type" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.roleType"></a>

```python
role_type: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AuditmanagerAssessmentDelegations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations">AuditmanagerAssessmentDelegations</a>

---


### AuditmanagerAssessmentRolesList <a name="AuditmanagerAssessmentRolesList" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.Initializer"></a>

```python
from cdktn_provider_awscc import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessmentRolesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AuditmanagerAssessmentRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AuditmanagerAssessmentRoles]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>]

---


### AuditmanagerAssessmentRolesOutputReference <a name="AuditmanagerAssessmentRolesOutputReference" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.resetRoleType">reset_role_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_role_type` <a name="reset_role_type" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.resetRoleType"></a>

```python
def reset_role_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleTypeInput">role_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleType">role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `role_type_input`<sup>Optional</sup> <a name="role_type_input" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleTypeInput"></a>

```python
role_type_input: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `role_type`<sup>Required</sup> <a name="role_type" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleType"></a>

```python
role_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AuditmanagerAssessmentRoles
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>

---


### AuditmanagerAssessmentScopeAwsAccountsList <a name="AuditmanagerAssessmentScopeAwsAccountsList" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.Initializer"></a>

```python
from cdktn_provider_awscc import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AuditmanagerAssessmentScopeAwsAccountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AuditmanagerAssessmentScopeAwsAccounts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a>]

---


### AuditmanagerAssessmentScopeAwsAccountsOutputReference <a name="AuditmanagerAssessmentScopeAwsAccountsOutputReference" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.resetEmailAddress">reset_email_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_email_address` <a name="reset_email_address" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.resetEmailAddress"></a>

```python
def reset_email_address() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.emailAddressInput">email_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.emailAddress">email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_address_input`<sup>Optional</sup> <a name="email_address_input" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.emailAddressInput"></a>

```python
email_address_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AuditmanagerAssessmentScopeAwsAccounts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a>

---


### AuditmanagerAssessmentScopeAwsServicesList <a name="AuditmanagerAssessmentScopeAwsServicesList" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.Initializer"></a>

```python
from cdktn_provider_awscc import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AuditmanagerAssessmentScopeAwsServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AuditmanagerAssessmentScopeAwsServices]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a>]

---


### AuditmanagerAssessmentScopeAwsServicesOutputReference <a name="AuditmanagerAssessmentScopeAwsServicesOutputReference" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.resetServiceName">reset_service_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_service_name` <a name="reset_service_name" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.resetServiceName"></a>

```python
def reset_service_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AuditmanagerAssessmentScopeAwsServices
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a>

---


### AuditmanagerAssessmentScopeOutputReference <a name="AuditmanagerAssessmentScopeOutputReference" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.putAwsAccounts">put_aws_accounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.putAwsServices">put_aws_services</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.resetAwsAccounts">reset_aws_accounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.resetAwsServices">reset_aws_services</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aws_accounts` <a name="put_aws_accounts" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.putAwsAccounts"></a>

```python
def put_aws_accounts(
  value: IResolvable | typing.List[AuditmanagerAssessmentScopeAwsAccounts]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.putAwsAccounts.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a>]

---

##### `put_aws_services` <a name="put_aws_services" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.putAwsServices"></a>

```python
def put_aws_services(
  value: IResolvable | typing.List[AuditmanagerAssessmentScopeAwsServices]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.putAwsServices.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a>]

---

##### `reset_aws_accounts` <a name="reset_aws_accounts" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.resetAwsAccounts"></a>

```python
def reset_aws_accounts() -> None
```

##### `reset_aws_services` <a name="reset_aws_services" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.resetAwsServices"></a>

```python
def reset_aws_services() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsAccounts">aws_accounts</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList">AuditmanagerAssessmentScopeAwsAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsServices">aws_services</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList">AuditmanagerAssessmentScopeAwsServicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsAccountsInput">aws_accounts_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsServicesInput">aws_services_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScope">AuditmanagerAssessmentScope</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_accounts`<sup>Required</sup> <a name="aws_accounts" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsAccounts"></a>

```python
aws_accounts: AuditmanagerAssessmentScopeAwsAccountsList
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList">AuditmanagerAssessmentScopeAwsAccountsList</a>

---

##### `aws_services`<sup>Required</sup> <a name="aws_services" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsServices"></a>

```python
aws_services: AuditmanagerAssessmentScopeAwsServicesList
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList">AuditmanagerAssessmentScopeAwsServicesList</a>

---

##### `aws_accounts_input`<sup>Optional</sup> <a name="aws_accounts_input" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsAccountsInput"></a>

```python
aws_accounts_input: IResolvable | typing.List[AuditmanagerAssessmentScopeAwsAccounts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a>]

---

##### `aws_services_input`<sup>Optional</sup> <a name="aws_services_input" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsServicesInput"></a>

```python
aws_services_input: IResolvable | typing.List[AuditmanagerAssessmentScopeAwsServices]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AuditmanagerAssessmentScope
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScope">AuditmanagerAssessmentScope</a>

---


### AuditmanagerAssessmentTagsList <a name="AuditmanagerAssessmentTagsList" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessmentTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AuditmanagerAssessmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags">AuditmanagerAssessmentTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AuditmanagerAssessmentTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags">AuditmanagerAssessmentTags</a>]

---


### AuditmanagerAssessmentTagsOutputReference <a name="AuditmanagerAssessmentTagsOutputReference" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import auditmanager_assessment

auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags">AuditmanagerAssessmentTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AuditmanagerAssessmentTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags">AuditmanagerAssessmentTags</a>

---



