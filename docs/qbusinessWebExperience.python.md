# `qbusinessWebExperience` Submodule <a name="`qbusinessWebExperience` Submodule" id="@cdktn/provider-awscc.qbusinessWebExperience"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QbusinessWebExperience <a name="QbusinessWebExperience" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience awscc_qbusiness_web_experience}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_web_experience

qbusinessWebExperience.QbusinessWebExperience(
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
  browser_extension_configuration: QbusinessWebExperienceBrowserExtensionConfiguration = None,
  customization_configuration: QbusinessWebExperienceCustomizationConfiguration = None,
  identity_provider_configuration: QbusinessWebExperienceIdentityProviderConfiguration = None,
  origins: typing.List[str] = None,
  role_arn: str = None,
  sample_prompts_control_mode: str = None,
  subtitle: str = None,
  tags: IResolvable | typing.List[QbusinessWebExperienceTags] = None,
  title: str = None,
  welcome_message: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#application_id QbusinessWebExperience#application_id}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.browserExtensionConfiguration">browser_extension_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfiguration">QbusinessWebExperienceBrowserExtensionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#browser_extension_configuration QbusinessWebExperience#browser_extension_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.customizationConfiguration">customization_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration">QbusinessWebExperienceCustomizationConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#customization_configuration QbusinessWebExperience#customization_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.identityProviderConfiguration">identity_provider_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration">QbusinessWebExperienceIdentityProviderConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#identity_provider_configuration QbusinessWebExperience#identity_provider_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.origins">origins</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#origins QbusinessWebExperience#origins}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#role_arn QbusinessWebExperience#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.samplePromptsControlMode">sample_prompts_control_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#sample_prompts_control_mode QbusinessWebExperience#sample_prompts_control_mode}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.subtitle">subtitle</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#subtitle QbusinessWebExperience#subtitle}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags">QbusinessWebExperienceTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#tags QbusinessWebExperience#tags}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#title QbusinessWebExperience#title}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.welcomeMessage">welcome_message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#welcome_message QbusinessWebExperience#welcome_message}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.applicationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#application_id QbusinessWebExperience#application_id}.

---

##### `browser_extension_configuration`<sup>Optional</sup> <a name="browser_extension_configuration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.browserExtensionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfiguration">QbusinessWebExperienceBrowserExtensionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#browser_extension_configuration QbusinessWebExperience#browser_extension_configuration}.

---

##### `customization_configuration`<sup>Optional</sup> <a name="customization_configuration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.customizationConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration">QbusinessWebExperienceCustomizationConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#customization_configuration QbusinessWebExperience#customization_configuration}.

---

##### `identity_provider_configuration`<sup>Optional</sup> <a name="identity_provider_configuration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.identityProviderConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration">QbusinessWebExperienceIdentityProviderConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#identity_provider_configuration QbusinessWebExperience#identity_provider_configuration}.

---

##### `origins`<sup>Optional</sup> <a name="origins" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.origins"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#origins QbusinessWebExperience#origins}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#role_arn QbusinessWebExperience#role_arn}.

---

##### `sample_prompts_control_mode`<sup>Optional</sup> <a name="sample_prompts_control_mode" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.samplePromptsControlMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#sample_prompts_control_mode QbusinessWebExperience#sample_prompts_control_mode}.

---

##### `subtitle`<sup>Optional</sup> <a name="subtitle" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.subtitle"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#subtitle QbusinessWebExperience#subtitle}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags">QbusinessWebExperienceTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#tags QbusinessWebExperience#tags}.

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#title QbusinessWebExperience#title}.

---

##### `welcome_message`<sup>Optional</sup> <a name="welcome_message" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.Initializer.parameter.welcomeMessage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#welcome_message QbusinessWebExperience#welcome_message}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putBrowserExtensionConfiguration">put_browser_extension_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putCustomizationConfiguration">put_customization_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putIdentityProviderConfiguration">put_identity_provider_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetBrowserExtensionConfiguration">reset_browser_extension_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetCustomizationConfiguration">reset_customization_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetIdentityProviderConfiguration">reset_identity_provider_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetOrigins">reset_origins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetSamplePromptsControlMode">reset_sample_prompts_control_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetSubtitle">reset_subtitle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetTitle">reset_title</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetWelcomeMessage">reset_welcome_message</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_browser_extension_configuration` <a name="put_browser_extension_configuration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putBrowserExtensionConfiguration"></a>

```python
def put_browser_extension_configuration(
  enabled_browser_extensions: typing.List[str] = None
) -> None
```

###### `enabled_browser_extensions`<sup>Optional</sup> <a name="enabled_browser_extensions" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putBrowserExtensionConfiguration.parameter.enabledBrowserExtensions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#enabled_browser_extensions QbusinessWebExperience#enabled_browser_extensions}.

---

##### `put_customization_configuration` <a name="put_customization_configuration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putCustomizationConfiguration"></a>

```python
def put_customization_configuration(
  custom_css_url: str = None,
  favicon_url: str = None,
  font_url: str = None,
  logo_url: str = None
) -> None
```

###### `custom_css_url`<sup>Optional</sup> <a name="custom_css_url" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putCustomizationConfiguration.parameter.customCssUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#custom_css_url QbusinessWebExperience#custom_css_url}.

---

###### `favicon_url`<sup>Optional</sup> <a name="favicon_url" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putCustomizationConfiguration.parameter.faviconUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#favicon_url QbusinessWebExperience#favicon_url}.

---

###### `font_url`<sup>Optional</sup> <a name="font_url" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putCustomizationConfiguration.parameter.fontUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#font_url QbusinessWebExperience#font_url}.

---

###### `logo_url`<sup>Optional</sup> <a name="logo_url" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putCustomizationConfiguration.parameter.logoUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#logo_url QbusinessWebExperience#logo_url}.

---

##### `put_identity_provider_configuration` <a name="put_identity_provider_configuration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putIdentityProviderConfiguration"></a>

```python
def put_identity_provider_configuration(
  open_id_connect_configuration: QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration = None,
  saml_configuration: QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration = None
) -> None
```

###### `open_id_connect_configuration`<sup>Optional</sup> <a name="open_id_connect_configuration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putIdentityProviderConfiguration.parameter.openIdConnectConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration">QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#open_id_connect_configuration QbusinessWebExperience#open_id_connect_configuration}.

---

###### `saml_configuration`<sup>Optional</sup> <a name="saml_configuration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putIdentityProviderConfiguration.parameter.samlConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration">QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#saml_configuration QbusinessWebExperience#saml_configuration}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[QbusinessWebExperienceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags">QbusinessWebExperienceTags</a>]

---

##### `reset_browser_extension_configuration` <a name="reset_browser_extension_configuration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetBrowserExtensionConfiguration"></a>

```python
def reset_browser_extension_configuration() -> None
```

##### `reset_customization_configuration` <a name="reset_customization_configuration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetCustomizationConfiguration"></a>

```python
def reset_customization_configuration() -> None
```

##### `reset_identity_provider_configuration` <a name="reset_identity_provider_configuration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetIdentityProviderConfiguration"></a>

```python
def reset_identity_provider_configuration() -> None
```

##### `reset_origins` <a name="reset_origins" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetOrigins"></a>

```python
def reset_origins() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_sample_prompts_control_mode` <a name="reset_sample_prompts_control_mode" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetSamplePromptsControlMode"></a>

```python
def reset_sample_prompts_control_mode() -> None
```

##### `reset_subtitle` <a name="reset_subtitle" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetSubtitle"></a>

```python
def reset_subtitle() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetTitle"></a>

```python
def reset_title() -> None
```

##### `reset_welcome_message` <a name="reset_welcome_message" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.resetWelcomeMessage"></a>

```python
def reset_welcome_message() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a QbusinessWebExperience resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.isConstruct"></a>

```python
from cdktn_provider_awscc import qbusiness_web_experience

qbusinessWebExperience.QbusinessWebExperience.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.isTerraformElement"></a>

```python
from cdktn_provider_awscc import qbusiness_web_experience

qbusinessWebExperience.QbusinessWebExperience.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.isTerraformResource"></a>

```python
from cdktn_provider_awscc import qbusiness_web_experience

qbusinessWebExperience.QbusinessWebExperience.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import qbusiness_web_experience

qbusinessWebExperience.QbusinessWebExperience.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a QbusinessWebExperience resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the QbusinessWebExperience to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing QbusinessWebExperience that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the QbusinessWebExperience to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.browserExtensionConfiguration">browser_extension_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference">QbusinessWebExperienceBrowserExtensionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.customizationConfiguration">customization_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference">QbusinessWebExperienceCustomizationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.defaultEndpoint">default_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.identityProviderConfiguration">identity_provider_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference">QbusinessWebExperienceIdentityProviderConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList">QbusinessWebExperienceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.webExperienceArn">web_experience_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.webExperienceId">web_experience_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.browserExtensionConfigurationInput">browser_extension_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfiguration">QbusinessWebExperienceBrowserExtensionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.customizationConfigurationInput">customization_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration">QbusinessWebExperienceCustomizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.identityProviderConfigurationInput">identity_provider_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration">QbusinessWebExperienceIdentityProviderConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.originsInput">origins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.samplePromptsControlModeInput">sample_prompts_control_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.subtitleInput">subtitle_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags">QbusinessWebExperienceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.welcomeMessageInput">welcome_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.origins">origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.samplePromptsControlMode">sample_prompts_control_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.subtitle">subtitle</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.welcomeMessage">welcome_message</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `browser_extension_configuration`<sup>Required</sup> <a name="browser_extension_configuration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.browserExtensionConfiguration"></a>

```python
browser_extension_configuration: QbusinessWebExperienceBrowserExtensionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference">QbusinessWebExperienceBrowserExtensionConfigurationOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `customization_configuration`<sup>Required</sup> <a name="customization_configuration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.customizationConfiguration"></a>

```python
customization_configuration: QbusinessWebExperienceCustomizationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference">QbusinessWebExperienceCustomizationConfigurationOutputReference</a>

---

##### `default_endpoint`<sup>Required</sup> <a name="default_endpoint" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.defaultEndpoint"></a>

```python
default_endpoint: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity_provider_configuration`<sup>Required</sup> <a name="identity_provider_configuration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.identityProviderConfiguration"></a>

```python
identity_provider_configuration: QbusinessWebExperienceIdentityProviderConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference">QbusinessWebExperienceIdentityProviderConfigurationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.tags"></a>

```python
tags: QbusinessWebExperienceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList">QbusinessWebExperienceTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `web_experience_arn`<sup>Required</sup> <a name="web_experience_arn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.webExperienceArn"></a>

```python
web_experience_arn: str
```

- *Type:* str

---

##### `web_experience_id`<sup>Required</sup> <a name="web_experience_id" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.webExperienceId"></a>

```python
web_experience_id: str
```

- *Type:* str

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `browser_extension_configuration_input`<sup>Optional</sup> <a name="browser_extension_configuration_input" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.browserExtensionConfigurationInput"></a>

```python
browser_extension_configuration_input: IResolvable | QbusinessWebExperienceBrowserExtensionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfiguration">QbusinessWebExperienceBrowserExtensionConfiguration</a>

---

##### `customization_configuration_input`<sup>Optional</sup> <a name="customization_configuration_input" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.customizationConfigurationInput"></a>

```python
customization_configuration_input: IResolvable | QbusinessWebExperienceCustomizationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration">QbusinessWebExperienceCustomizationConfiguration</a>

---

##### `identity_provider_configuration_input`<sup>Optional</sup> <a name="identity_provider_configuration_input" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.identityProviderConfigurationInput"></a>

```python
identity_provider_configuration_input: IResolvable | QbusinessWebExperienceIdentityProviderConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration">QbusinessWebExperienceIdentityProviderConfiguration</a>

---

##### `origins_input`<sup>Optional</sup> <a name="origins_input" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.originsInput"></a>

```python
origins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `sample_prompts_control_mode_input`<sup>Optional</sup> <a name="sample_prompts_control_mode_input" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.samplePromptsControlModeInput"></a>

```python
sample_prompts_control_mode_input: str
```

- *Type:* str

---

##### `subtitle_input`<sup>Optional</sup> <a name="subtitle_input" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.subtitleInput"></a>

```python
subtitle_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[QbusinessWebExperienceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags">QbusinessWebExperienceTags</a>]

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `welcome_message_input`<sup>Optional</sup> <a name="welcome_message_input" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.welcomeMessageInput"></a>

```python
welcome_message_input: str
```

- *Type:* str

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `origins`<sup>Required</sup> <a name="origins" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.origins"></a>

```python
origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `sample_prompts_control_mode`<sup>Required</sup> <a name="sample_prompts_control_mode" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.samplePromptsControlMode"></a>

```python
sample_prompts_control_mode: str
```

- *Type:* str

---

##### `subtitle`<sup>Required</sup> <a name="subtitle" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.subtitle"></a>

```python
subtitle: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `welcome_message`<sup>Required</sup> <a name="welcome_message" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.welcomeMessage"></a>

```python
welcome_message: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperience.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### QbusinessWebExperienceBrowserExtensionConfiguration <a name="QbusinessWebExperienceBrowserExtensionConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_web_experience

qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfiguration(
  enabled_browser_extensions: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfiguration.property.enabledBrowserExtensions">enabled_browser_extensions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#enabled_browser_extensions QbusinessWebExperience#enabled_browser_extensions}. |

---

##### `enabled_browser_extensions`<sup>Optional</sup> <a name="enabled_browser_extensions" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfiguration.property.enabledBrowserExtensions"></a>

```python
enabled_browser_extensions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#enabled_browser_extensions QbusinessWebExperience#enabled_browser_extensions}.

---

### QbusinessWebExperienceConfig <a name="QbusinessWebExperienceConfig" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_web_experience

qbusinessWebExperience.QbusinessWebExperienceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_id: str,
  browser_extension_configuration: QbusinessWebExperienceBrowserExtensionConfiguration = None,
  customization_configuration: QbusinessWebExperienceCustomizationConfiguration = None,
  identity_provider_configuration: QbusinessWebExperienceIdentityProviderConfiguration = None,
  origins: typing.List[str] = None,
  role_arn: str = None,
  sample_prompts_control_mode: str = None,
  subtitle: str = None,
  tags: IResolvable | typing.List[QbusinessWebExperienceTags] = None,
  title: str = None,
  welcome_message: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#application_id QbusinessWebExperience#application_id}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.browserExtensionConfiguration">browser_extension_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfiguration">QbusinessWebExperienceBrowserExtensionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#browser_extension_configuration QbusinessWebExperience#browser_extension_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.customizationConfiguration">customization_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration">QbusinessWebExperienceCustomizationConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#customization_configuration QbusinessWebExperience#customization_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.identityProviderConfiguration">identity_provider_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration">QbusinessWebExperienceIdentityProviderConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#identity_provider_configuration QbusinessWebExperience#identity_provider_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.origins">origins</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#origins QbusinessWebExperience#origins}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#role_arn QbusinessWebExperience#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.samplePromptsControlMode">sample_prompts_control_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#sample_prompts_control_mode QbusinessWebExperience#sample_prompts_control_mode}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.subtitle">subtitle</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#subtitle QbusinessWebExperience#subtitle}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags">QbusinessWebExperienceTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#tags QbusinessWebExperience#tags}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#title QbusinessWebExperience#title}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.welcomeMessage">welcome_message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#welcome_message QbusinessWebExperience#welcome_message}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#application_id QbusinessWebExperience#application_id}.

---

##### `browser_extension_configuration`<sup>Optional</sup> <a name="browser_extension_configuration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.browserExtensionConfiguration"></a>

```python
browser_extension_configuration: QbusinessWebExperienceBrowserExtensionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfiguration">QbusinessWebExperienceBrowserExtensionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#browser_extension_configuration QbusinessWebExperience#browser_extension_configuration}.

---

##### `customization_configuration`<sup>Optional</sup> <a name="customization_configuration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.customizationConfiguration"></a>

```python
customization_configuration: QbusinessWebExperienceCustomizationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration">QbusinessWebExperienceCustomizationConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#customization_configuration QbusinessWebExperience#customization_configuration}.

---

##### `identity_provider_configuration`<sup>Optional</sup> <a name="identity_provider_configuration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.identityProviderConfiguration"></a>

```python
identity_provider_configuration: QbusinessWebExperienceIdentityProviderConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration">QbusinessWebExperienceIdentityProviderConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#identity_provider_configuration QbusinessWebExperience#identity_provider_configuration}.

---

##### `origins`<sup>Optional</sup> <a name="origins" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.origins"></a>

```python
origins: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#origins QbusinessWebExperience#origins}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#role_arn QbusinessWebExperience#role_arn}.

---

##### `sample_prompts_control_mode`<sup>Optional</sup> <a name="sample_prompts_control_mode" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.samplePromptsControlMode"></a>

```python
sample_prompts_control_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#sample_prompts_control_mode QbusinessWebExperience#sample_prompts_control_mode}.

---

##### `subtitle`<sup>Optional</sup> <a name="subtitle" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.subtitle"></a>

```python
subtitle: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#subtitle QbusinessWebExperience#subtitle}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[QbusinessWebExperienceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags">QbusinessWebExperienceTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#tags QbusinessWebExperience#tags}.

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#title QbusinessWebExperience#title}.

---

##### `welcome_message`<sup>Optional</sup> <a name="welcome_message" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceConfig.property.welcomeMessage"></a>

```python
welcome_message: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#welcome_message QbusinessWebExperience#welcome_message}.

---

### QbusinessWebExperienceCustomizationConfiguration <a name="QbusinessWebExperienceCustomizationConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_web_experience

qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration(
  custom_css_url: str = None,
  favicon_url: str = None,
  font_url: str = None,
  logo_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration.property.customCssUrl">custom_css_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#custom_css_url QbusinessWebExperience#custom_css_url}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration.property.faviconUrl">favicon_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#favicon_url QbusinessWebExperience#favicon_url}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration.property.fontUrl">font_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#font_url QbusinessWebExperience#font_url}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration.property.logoUrl">logo_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#logo_url QbusinessWebExperience#logo_url}. |

---

##### `custom_css_url`<sup>Optional</sup> <a name="custom_css_url" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration.property.customCssUrl"></a>

```python
custom_css_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#custom_css_url QbusinessWebExperience#custom_css_url}.

---

##### `favicon_url`<sup>Optional</sup> <a name="favicon_url" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration.property.faviconUrl"></a>

```python
favicon_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#favicon_url QbusinessWebExperience#favicon_url}.

---

##### `font_url`<sup>Optional</sup> <a name="font_url" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration.property.fontUrl"></a>

```python
font_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#font_url QbusinessWebExperience#font_url}.

---

##### `logo_url`<sup>Optional</sup> <a name="logo_url" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration.property.logoUrl"></a>

```python
logo_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#logo_url QbusinessWebExperience#logo_url}.

---

### QbusinessWebExperienceIdentityProviderConfiguration <a name="QbusinessWebExperienceIdentityProviderConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_web_experience

qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration(
  open_id_connect_configuration: QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration = None,
  saml_configuration: QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration.property.openIdConnectConfiguration">open_id_connect_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration">QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#open_id_connect_configuration QbusinessWebExperience#open_id_connect_configuration}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration.property.samlConfiguration">saml_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration">QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#saml_configuration QbusinessWebExperience#saml_configuration}. |

---

##### `open_id_connect_configuration`<sup>Optional</sup> <a name="open_id_connect_configuration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration.property.openIdConnectConfiguration"></a>

```python
open_id_connect_configuration: QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration">QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#open_id_connect_configuration QbusinessWebExperience#open_id_connect_configuration}.

---

##### `saml_configuration`<sup>Optional</sup> <a name="saml_configuration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration.property.samlConfiguration"></a>

```python
saml_configuration: QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration">QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#saml_configuration QbusinessWebExperience#saml_configuration}.

---

### QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration <a name="QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_web_experience

qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration(
  secrets_arn: str = None,
  secrets_role: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration.property.secretsArn">secrets_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#secrets_arn QbusinessWebExperience#secrets_arn}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration.property.secretsRole">secrets_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#secrets_role QbusinessWebExperience#secrets_role}. |

---

##### `secrets_arn`<sup>Optional</sup> <a name="secrets_arn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration.property.secretsArn"></a>

```python
secrets_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#secrets_arn QbusinessWebExperience#secrets_arn}.

---

##### `secrets_role`<sup>Optional</sup> <a name="secrets_role" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration.property.secretsRole"></a>

```python
secrets_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#secrets_role QbusinessWebExperience#secrets_role}.

---

### QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration <a name="QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_web_experience

qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration(
  authentication_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration.property.authenticationUrl">authentication_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#authentication_url QbusinessWebExperience#authentication_url}. |

---

##### `authentication_url`<sup>Optional</sup> <a name="authentication_url" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration.property.authenticationUrl"></a>

```python
authentication_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#authentication_url QbusinessWebExperience#authentication_url}.

---

### QbusinessWebExperienceTags <a name="QbusinessWebExperienceTags" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_web_experience

qbusinessWebExperience.QbusinessWebExperienceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#key QbusinessWebExperience#key}. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#value QbusinessWebExperience#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#key QbusinessWebExperience#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#value QbusinessWebExperience#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### QbusinessWebExperienceBrowserExtensionConfigurationOutputReference <a name="QbusinessWebExperienceBrowserExtensionConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_web_experience

qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.resetEnabledBrowserExtensions">reset_enabled_browser_extensions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled_browser_extensions` <a name="reset_enabled_browser_extensions" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.resetEnabledBrowserExtensions"></a>

```python
def reset_enabled_browser_extensions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.enabledBrowserExtensionsInput">enabled_browser_extensions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.enabledBrowserExtensions">enabled_browser_extensions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfiguration">QbusinessWebExperienceBrowserExtensionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_browser_extensions_input`<sup>Optional</sup> <a name="enabled_browser_extensions_input" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.enabledBrowserExtensionsInput"></a>

```python
enabled_browser_extensions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled_browser_extensions`<sup>Required</sup> <a name="enabled_browser_extensions" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.enabledBrowserExtensions"></a>

```python
enabled_browser_extensions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QbusinessWebExperienceBrowserExtensionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceBrowserExtensionConfiguration">QbusinessWebExperienceBrowserExtensionConfiguration</a>

---


### QbusinessWebExperienceCustomizationConfigurationOutputReference <a name="QbusinessWebExperienceCustomizationConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_web_experience

qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.resetCustomCssUrl">reset_custom_css_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.resetFaviconUrl">reset_favicon_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.resetFontUrl">reset_font_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.resetLogoUrl">reset_logo_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_custom_css_url` <a name="reset_custom_css_url" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.resetCustomCssUrl"></a>

```python
def reset_custom_css_url() -> None
```

##### `reset_favicon_url` <a name="reset_favicon_url" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.resetFaviconUrl"></a>

```python
def reset_favicon_url() -> None
```

##### `reset_font_url` <a name="reset_font_url" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.resetFontUrl"></a>

```python
def reset_font_url() -> None
```

##### `reset_logo_url` <a name="reset_logo_url" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.resetLogoUrl"></a>

```python
def reset_logo_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.customCssUrlInput">custom_css_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.faviconUrlInput">favicon_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.fontUrlInput">font_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.logoUrlInput">logo_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.customCssUrl">custom_css_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.faviconUrl">favicon_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.fontUrl">font_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.logoUrl">logo_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration">QbusinessWebExperienceCustomizationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_css_url_input`<sup>Optional</sup> <a name="custom_css_url_input" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.customCssUrlInput"></a>

```python
custom_css_url_input: str
```

- *Type:* str

---

##### `favicon_url_input`<sup>Optional</sup> <a name="favicon_url_input" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.faviconUrlInput"></a>

```python
favicon_url_input: str
```

- *Type:* str

---

##### `font_url_input`<sup>Optional</sup> <a name="font_url_input" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.fontUrlInput"></a>

```python
font_url_input: str
```

- *Type:* str

---

##### `logo_url_input`<sup>Optional</sup> <a name="logo_url_input" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.logoUrlInput"></a>

```python
logo_url_input: str
```

- *Type:* str

---

##### `custom_css_url`<sup>Required</sup> <a name="custom_css_url" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.customCssUrl"></a>

```python
custom_css_url: str
```

- *Type:* str

---

##### `favicon_url`<sup>Required</sup> <a name="favicon_url" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.faviconUrl"></a>

```python
favicon_url: str
```

- *Type:* str

---

##### `font_url`<sup>Required</sup> <a name="font_url" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.fontUrl"></a>

```python
font_url: str
```

- *Type:* str

---

##### `logo_url`<sup>Required</sup> <a name="logo_url" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.logoUrl"></a>

```python
logo_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QbusinessWebExperienceCustomizationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceCustomizationConfiguration">QbusinessWebExperienceCustomizationConfiguration</a>

---


### QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference <a name="QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_web_experience

qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.resetSecretsArn">reset_secrets_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.resetSecretsRole">reset_secrets_role</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_secrets_arn` <a name="reset_secrets_arn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.resetSecretsArn"></a>

```python
def reset_secrets_arn() -> None
```

##### `reset_secrets_role` <a name="reset_secrets_role" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.resetSecretsRole"></a>

```python
def reset_secrets_role() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.secretsArnInput">secrets_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.secretsRoleInput">secrets_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.secretsArn">secrets_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.secretsRole">secrets_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration">QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `secrets_arn_input`<sup>Optional</sup> <a name="secrets_arn_input" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.secretsArnInput"></a>

```python
secrets_arn_input: str
```

- *Type:* str

---

##### `secrets_role_input`<sup>Optional</sup> <a name="secrets_role_input" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.secretsRoleInput"></a>

```python
secrets_role_input: str
```

- *Type:* str

---

##### `secrets_arn`<sup>Required</sup> <a name="secrets_arn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.secretsArn"></a>

```python
secrets_arn: str
```

- *Type:* str

---

##### `secrets_role`<sup>Required</sup> <a name="secrets_role" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.secretsRole"></a>

```python
secrets_role: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration">QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration</a>

---


### QbusinessWebExperienceIdentityProviderConfigurationOutputReference <a name="QbusinessWebExperienceIdentityProviderConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_web_experience

qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.putOpenIdConnectConfiguration">put_open_id_connect_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.putSamlConfiguration">put_saml_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.resetOpenIdConnectConfiguration">reset_open_id_connect_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.resetSamlConfiguration">reset_saml_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_open_id_connect_configuration` <a name="put_open_id_connect_configuration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.putOpenIdConnectConfiguration"></a>

```python
def put_open_id_connect_configuration(
  secrets_arn: str = None,
  secrets_role: str = None
) -> None
```

###### `secrets_arn`<sup>Optional</sup> <a name="secrets_arn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.putOpenIdConnectConfiguration.parameter.secretsArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#secrets_arn QbusinessWebExperience#secrets_arn}.

---

###### `secrets_role`<sup>Optional</sup> <a name="secrets_role" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.putOpenIdConnectConfiguration.parameter.secretsRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#secrets_role QbusinessWebExperience#secrets_role}.

---

##### `put_saml_configuration` <a name="put_saml_configuration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.putSamlConfiguration"></a>

```python
def put_saml_configuration(
  authentication_url: str = None
) -> None
```

###### `authentication_url`<sup>Optional</sup> <a name="authentication_url" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.putSamlConfiguration.parameter.authenticationUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/qbusiness_web_experience#authentication_url QbusinessWebExperience#authentication_url}.

---

##### `reset_open_id_connect_configuration` <a name="reset_open_id_connect_configuration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.resetOpenIdConnectConfiguration"></a>

```python
def reset_open_id_connect_configuration() -> None
```

##### `reset_saml_configuration` <a name="reset_saml_configuration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.resetSamlConfiguration"></a>

```python
def reset_saml_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.openIdConnectConfiguration">open_id_connect_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference">QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.samlConfiguration">saml_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference">QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.openIdConnectConfigurationInput">open_id_connect_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration">QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.samlConfigurationInput">saml_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration">QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration">QbusinessWebExperienceIdentityProviderConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `open_id_connect_configuration`<sup>Required</sup> <a name="open_id_connect_configuration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.openIdConnectConfiguration"></a>

```python
open_id_connect_configuration: QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference">QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference</a>

---

##### `saml_configuration`<sup>Required</sup> <a name="saml_configuration" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.samlConfiguration"></a>

```python
saml_configuration: QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference">QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference</a>

---

##### `open_id_connect_configuration_input`<sup>Optional</sup> <a name="open_id_connect_configuration_input" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.openIdConnectConfigurationInput"></a>

```python
open_id_connect_configuration_input: IResolvable | QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration">QbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration</a>

---

##### `saml_configuration_input`<sup>Optional</sup> <a name="saml_configuration_input" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.samlConfigurationInput"></a>

```python
saml_configuration_input: IResolvable | QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration">QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QbusinessWebExperienceIdentityProviderConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfiguration">QbusinessWebExperienceIdentityProviderConfiguration</a>

---


### QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference <a name="QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_web_experience

qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.resetAuthenticationUrl">reset_authentication_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authentication_url` <a name="reset_authentication_url" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.resetAuthenticationUrl"></a>

```python
def reset_authentication_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.authenticationUrlInput">authentication_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.authenticationUrl">authentication_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration">QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_url_input`<sup>Optional</sup> <a name="authentication_url_input" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.authenticationUrlInput"></a>

```python
authentication_url_input: str
```

- *Type:* str

---

##### `authentication_url`<sup>Required</sup> <a name="authentication_url" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.authenticationUrl"></a>

```python
authentication_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration">QbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration</a>

---


### QbusinessWebExperienceTagsList <a name="QbusinessWebExperienceTagsList" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_web_experience

qbusinessWebExperience.QbusinessWebExperienceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QbusinessWebExperienceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags">QbusinessWebExperienceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[QbusinessWebExperienceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags">QbusinessWebExperienceTags</a>]

---


### QbusinessWebExperienceTagsOutputReference <a name="QbusinessWebExperienceTagsOutputReference" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import qbusiness_web_experience

qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags">QbusinessWebExperienceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QbusinessWebExperienceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.qbusinessWebExperience.QbusinessWebExperienceTags">QbusinessWebExperienceTags</a>

---



