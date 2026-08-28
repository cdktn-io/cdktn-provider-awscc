# `dataAwsccWorkspaceswebUserSettings` Submodule <a name="`dataAwsccWorkspaceswebUserSettings` Submodule" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccWorkspaceswebUserSettings <a name="DataAwsccWorkspaceswebUserSettings" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/workspacesweb_user_settings awscc_workspacesweb_user_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspaceswebusersettings"

dataawsccworkspaceswebusersettings.NewDataAwsccWorkspaceswebUserSettings(scope Construct, id *string, config DataAwsccWorkspaceswebUserSettingsConfig) DataAwsccWorkspaceswebUserSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsConfig">DataAwsccWorkspaceswebUserSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsConfig">DataAwsccWorkspaceswebUserSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccWorkspaceswebUserSettings resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspaceswebusersettings"

dataawsccworkspaceswebusersettings.DataAwsccWorkspaceswebUserSettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspaceswebusersettings"

dataawsccworkspaceswebusersettings.DataAwsccWorkspaceswebUserSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspaceswebusersettings"

dataawsccworkspaceswebusersettings.DataAwsccWorkspaceswebUserSettings_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspaceswebusersettings"

dataawsccworkspaceswebusersettings.DataAwsccWorkspaceswebUserSettings_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccWorkspaceswebUserSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccWorkspaceswebUserSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccWorkspaceswebUserSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/workspacesweb_user_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccWorkspaceswebUserSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.additionalEncryptionContext">AdditionalEncryptionContext</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.associatedPortalArns">AssociatedPortalArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.brandingConfiguration">BrandingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference">DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.cookieSynchronizationConfiguration">CookieSynchronizationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference">DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.copyAllowed">CopyAllowed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.customerManagedKey">CustomerManagedKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.deepLinkAllowed">DeepLinkAllowed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.disconnectTimeoutInMinutes">DisconnectTimeoutInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.downloadAllowed">DownloadAllowed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.idleDisconnectTimeoutInMinutes">IdleDisconnectTimeoutInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.pasteAllowed">PasteAllowed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.printAllowed">PrintAllowed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList">DataAwsccWorkspaceswebUserSettingsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.toolbarConfiguration">ToolbarConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference">DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.uploadAllowed">UploadAllowed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.userSettingsArn">UserSettingsArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.webAuthnAllowed">WebAuthnAllowed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AdditionalEncryptionContext`<sup>Required</sup> <a name="AdditionalEncryptionContext" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.additionalEncryptionContext"></a>

```go
func AdditionalEncryptionContext() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `AssociatedPortalArns`<sup>Required</sup> <a name="AssociatedPortalArns" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.associatedPortalArns"></a>

```go
func AssociatedPortalArns() *[]*string
```

- *Type:* *[]*string

---

##### `BrandingConfiguration`<sup>Required</sup> <a name="BrandingConfiguration" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.brandingConfiguration"></a>

```go
func BrandingConfiguration() DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference">DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference</a>

---

##### `CookieSynchronizationConfiguration`<sup>Required</sup> <a name="CookieSynchronizationConfiguration" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.cookieSynchronizationConfiguration"></a>

```go
func CookieSynchronizationConfiguration() DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference">DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference</a>

---

##### `CopyAllowed`<sup>Required</sup> <a name="CopyAllowed" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.copyAllowed"></a>

```go
func CopyAllowed() *string
```

- *Type:* *string

---

##### `CustomerManagedKey`<sup>Required</sup> <a name="CustomerManagedKey" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.customerManagedKey"></a>

```go
func CustomerManagedKey() *string
```

- *Type:* *string

---

##### `DeepLinkAllowed`<sup>Required</sup> <a name="DeepLinkAllowed" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.deepLinkAllowed"></a>

```go
func DeepLinkAllowed() *string
```

- *Type:* *string

---

##### `DisconnectTimeoutInMinutes`<sup>Required</sup> <a name="DisconnectTimeoutInMinutes" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.disconnectTimeoutInMinutes"></a>

```go
func DisconnectTimeoutInMinutes() *f64
```

- *Type:* *f64

---

##### `DownloadAllowed`<sup>Required</sup> <a name="DownloadAllowed" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.downloadAllowed"></a>

```go
func DownloadAllowed() *string
```

- *Type:* *string

---

##### `IdleDisconnectTimeoutInMinutes`<sup>Required</sup> <a name="IdleDisconnectTimeoutInMinutes" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.idleDisconnectTimeoutInMinutes"></a>

```go
func IdleDisconnectTimeoutInMinutes() *f64
```

- *Type:* *f64

---

##### `PasteAllowed`<sup>Required</sup> <a name="PasteAllowed" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.pasteAllowed"></a>

```go
func PasteAllowed() *string
```

- *Type:* *string

---

##### `PrintAllowed`<sup>Required</sup> <a name="PrintAllowed" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.printAllowed"></a>

```go
func PrintAllowed() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.tags"></a>

```go
func Tags() DataAwsccWorkspaceswebUserSettingsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList">DataAwsccWorkspaceswebUserSettingsTagsList</a>

---

##### `ToolbarConfiguration`<sup>Required</sup> <a name="ToolbarConfiguration" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.toolbarConfiguration"></a>

```go
func ToolbarConfiguration() DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference">DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference</a>

---

##### `UploadAllowed`<sup>Required</sup> <a name="UploadAllowed" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.uploadAllowed"></a>

```go
func UploadAllowed() *string
```

- *Type:* *string

---

##### `UserSettingsArn`<sup>Required</sup> <a name="UserSettingsArn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.userSettingsArn"></a>

```go
func UserSettingsArn() *string
```

- *Type:* *string

---

##### `WebAuthnAllowed`<sup>Required</sup> <a name="WebAuthnAllowed" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.webAuthnAllowed"></a>

```go
func WebAuthnAllowed() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccWorkspaceswebUserSettingsBrandingConfiguration <a name="DataAwsccWorkspaceswebUserSettingsBrandingConfiguration" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspaceswebusersettings"

&dataawsccworkspaceswebusersettings.DataAwsccWorkspaceswebUserSettingsBrandingConfiguration {

}
```


### DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata <a name="DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspaceswebusersettings"

&dataawsccworkspaceswebusersettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata {

}
```


### DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings <a name="DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspaceswebusersettings"

&dataawsccworkspaceswebusersettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings {

}
```


### DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadata <a name="DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadata" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspaceswebusersettings"

&dataawsccworkspaceswebusersettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadata {

}
```


### DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata <a name="DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspaceswebusersettings"

&dataawsccworkspaceswebusersettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata {

}
```


### DataAwsccWorkspaceswebUserSettingsConfig <a name="DataAwsccWorkspaceswebUserSettingsConfig" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspaceswebusersettings"

&dataawsccworkspaceswebusersettings.DataAwsccWorkspaceswebUserSettingsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/workspacesweb_user_settings#id DataAwsccWorkspaceswebUserSettings#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfiguration <a name="DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfiguration" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspaceswebusersettings"

&dataawsccworkspaceswebusersettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfiguration {

}
```


### DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct <a name="DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspaceswebusersettings"

&dataawsccworkspaceswebusersettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct {

}
```


### DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct <a name="DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspaceswebusersettings"

&dataawsccworkspaceswebusersettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct {

}
```


### DataAwsccWorkspaceswebUserSettingsTags <a name="DataAwsccWorkspaceswebUserSettingsTags" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspaceswebusersettings"

&dataawsccworkspaceswebusersettings.DataAwsccWorkspaceswebUserSettingsTags {

}
```


### DataAwsccWorkspaceswebUserSettingsToolbarConfiguration <a name="DataAwsccWorkspaceswebUserSettingsToolbarConfiguration" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspaceswebusersettings"

&dataawsccworkspaceswebusersettings.DataAwsccWorkspaceswebUserSettingsToolbarConfiguration {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference <a name="DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspaceswebusersettings"

dataawsccworkspaceswebusersettings.NewDataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.fileExtension">FileExtension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.lastUploadTimestamp">LastUploadTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.mimeType">MimeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata">DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileExtension`<sup>Required</sup> <a name="FileExtension" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.fileExtension"></a>

```go
func FileExtension() *string
```

- *Type:* *string

---

##### `LastUploadTimestamp`<sup>Required</sup> <a name="LastUploadTimestamp" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.lastUploadTimestamp"></a>

```go
func LastUploadTimestamp() *string
```

- *Type:* *string

---

##### `MimeType`<sup>Required</sup> <a name="MimeType" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.mimeType"></a>

```go
func MimeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata">DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadata</a>

---


### DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap <a name="DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspaceswebusersettings"

dataawsccworkspaceswebusersettings.NewDataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.get"></a>

```go
func Get(key *string) DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference <a name="DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspaceswebusersettings"

dataawsccworkspaceswebusersettings.NewDataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.browserTabTitle">BrowserTabTitle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.contactButtonText">ContactButtonText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.contactLink">ContactLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loadingText">LoadingText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginButtonText">LoginButtonText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginDescription">LoginDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginTitle">LoginTitle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.welcomeText">WelcomeText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings">DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BrowserTabTitle`<sup>Required</sup> <a name="BrowserTabTitle" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.browserTabTitle"></a>

```go
func BrowserTabTitle() *string
```

- *Type:* *string

---

##### `ContactButtonText`<sup>Required</sup> <a name="ContactButtonText" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.contactButtonText"></a>

```go
func ContactButtonText() *string
```

- *Type:* *string

---

##### `ContactLink`<sup>Required</sup> <a name="ContactLink" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.contactLink"></a>

```go
func ContactLink() *string
```

- *Type:* *string

---

##### `LoadingText`<sup>Required</sup> <a name="LoadingText" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loadingText"></a>

```go
func LoadingText() *string
```

- *Type:* *string

---

##### `LoginButtonText`<sup>Required</sup> <a name="LoginButtonText" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginButtonText"></a>

```go
func LoginButtonText() *string
```

- *Type:* *string

---

##### `LoginDescription`<sup>Required</sup> <a name="LoginDescription" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginDescription"></a>

```go
func LoginDescription() *string
```

- *Type:* *string

---

##### `LoginTitle`<sup>Required</sup> <a name="LoginTitle" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.loginTitle"></a>

```go
func LoginTitle() *string
```

- *Type:* *string

---

##### `WelcomeText`<sup>Required</sup> <a name="WelcomeText" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.welcomeText"></a>

```go
func WelcomeText() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings">DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStrings</a>

---


### DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference <a name="DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspaceswebusersettings"

dataawsccworkspaceswebusersettings.NewDataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.fileExtension">FileExtension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.lastUploadTimestamp">LastUploadTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.mimeType">MimeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadata">DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileExtension`<sup>Required</sup> <a name="FileExtension" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.fileExtension"></a>

```go
func FileExtension() *string
```

- *Type:* *string

---

##### `LastUploadTimestamp`<sup>Required</sup> <a name="LastUploadTimestamp" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.lastUploadTimestamp"></a>

```go
func LastUploadTimestamp() *string
```

- *Type:* *string

---

##### `MimeType`<sup>Required</sup> <a name="MimeType" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.mimeType"></a>

```go
func MimeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadata">DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadata</a>

---


### DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference <a name="DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspaceswebusersettings"

dataawsccworkspaceswebusersettings.NewDataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.colorTheme">ColorTheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.favicon">Favicon</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.faviconMetadata">FaviconMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference">DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.localizedStrings">LocalizedStrings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap">DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.logo">Logo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.logoMetadata">LogoMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference">DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.termsOfService">TermsOfService</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.wallpaper">Wallpaper</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.wallpaperMetadata">WallpaperMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference">DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfiguration">DataAwsccWorkspaceswebUserSettingsBrandingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColorTheme`<sup>Required</sup> <a name="ColorTheme" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.colorTheme"></a>

```go
func ColorTheme() *string
```

- *Type:* *string

---

##### `Favicon`<sup>Required</sup> <a name="Favicon" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.favicon"></a>

```go
func Favicon() *string
```

- *Type:* *string

---

##### `FaviconMetadata`<sup>Required</sup> <a name="FaviconMetadata" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.faviconMetadata"></a>

```go
func FaviconMetadata() DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference">DataAwsccWorkspaceswebUserSettingsBrandingConfigurationFaviconMetadataOutputReference</a>

---

##### `LocalizedStrings`<sup>Required</sup> <a name="LocalizedStrings" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.localizedStrings"></a>

```go
func LocalizedStrings() DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap">DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLocalizedStringsMap</a>

---

##### `Logo`<sup>Required</sup> <a name="Logo" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.logo"></a>

```go
func Logo() *string
```

- *Type:* *string

---

##### `LogoMetadata`<sup>Required</sup> <a name="LogoMetadata" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.logoMetadata"></a>

```go
func LogoMetadata() DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference">DataAwsccWorkspaceswebUserSettingsBrandingConfigurationLogoMetadataOutputReference</a>

---

##### `TermsOfService`<sup>Required</sup> <a name="TermsOfService" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.termsOfService"></a>

```go
func TermsOfService() *string
```

- *Type:* *string

---

##### `Wallpaper`<sup>Required</sup> <a name="Wallpaper" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.wallpaper"></a>

```go
func Wallpaper() *string
```

- *Type:* *string

---

##### `WallpaperMetadata`<sup>Required</sup> <a name="WallpaperMetadata" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.wallpaperMetadata"></a>

```go
func WallpaperMetadata() DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference">DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWorkspaceswebUserSettingsBrandingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfiguration">DataAwsccWorkspaceswebUserSettingsBrandingConfiguration</a>

---


### DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference <a name="DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspaceswebusersettings"

dataawsccworkspaceswebusersettings.NewDataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.fileExtension">FileExtension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.lastUploadTimestamp">LastUploadTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.mimeType">MimeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata">DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileExtension`<sup>Required</sup> <a name="FileExtension" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.fileExtension"></a>

```go
func FileExtension() *string
```

- *Type:* *string

---

##### `LastUploadTimestamp`<sup>Required</sup> <a name="LastUploadTimestamp" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.lastUploadTimestamp"></a>

```go
func LastUploadTimestamp() *string
```

- *Type:* *string

---

##### `MimeType`<sup>Required</sup> <a name="MimeType" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.mimeType"></a>

```go
func MimeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata">DataAwsccWorkspaceswebUserSettingsBrandingConfigurationWallpaperMetadata</a>

---


### DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList <a name="DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspaceswebusersettings"

dataawsccworkspaceswebusersettings.NewDataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.get"></a>

```go
func Get(index *f64) DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference <a name="DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspaceswebusersettings"

dataawsccworkspaceswebusersettings.NewDataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct">DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct">DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct</a>

---


### DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList <a name="DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspaceswebusersettings"

dataawsccworkspaceswebusersettings.NewDataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.get"></a>

```go
func Get(index *f64) DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference <a name="DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspaceswebusersettings"

dataawsccworkspaceswebusersettings.NewDataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct">DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct">DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct</a>

---


### DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference <a name="DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspaceswebusersettings"

dataawsccworkspaceswebusersettings.NewDataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.allowlist">Allowlist</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList">DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.blocklist">Blocklist</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList">DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfiguration">DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Allowlist`<sup>Required</sup> <a name="Allowlist" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.allowlist"></a>

```go
func Allowlist() DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList">DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList</a>

---

##### `Blocklist`<sup>Required</sup> <a name="Blocklist" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.blocklist"></a>

```go
func Blocklist() DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList">DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfiguration">DataAwsccWorkspaceswebUserSettingsCookieSynchronizationConfiguration</a>

---


### DataAwsccWorkspaceswebUserSettingsTagsList <a name="DataAwsccWorkspaceswebUserSettingsTagsList" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspaceswebusersettings"

dataawsccworkspaceswebusersettings.NewDataAwsccWorkspaceswebUserSettingsTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccWorkspaceswebUserSettingsTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.get"></a>

```go
func Get(index *f64) DataAwsccWorkspaceswebUserSettingsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccWorkspaceswebUserSettingsTagsOutputReference <a name="DataAwsccWorkspaceswebUserSettingsTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspaceswebusersettings"

dataawsccworkspaceswebusersettings.NewDataAwsccWorkspaceswebUserSettingsTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccWorkspaceswebUserSettingsTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTags">DataAwsccWorkspaceswebUserSettingsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWorkspaceswebUserSettingsTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsTags">DataAwsccWorkspaceswebUserSettingsTags</a>

---


### DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference <a name="DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccworkspaceswebusersettings"

dataawsccworkspaceswebusersettings.NewDataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.hiddenToolbarItems">HiddenToolbarItems</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.maxDisplayResolution">MaxDisplayResolution</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.toolbarType">ToolbarType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.visualMode">VisualMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfiguration">DataAwsccWorkspaceswebUserSettingsToolbarConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HiddenToolbarItems`<sup>Required</sup> <a name="HiddenToolbarItems" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.hiddenToolbarItems"></a>

```go
func HiddenToolbarItems() *[]*string
```

- *Type:* *[]*string

---

##### `MaxDisplayResolution`<sup>Required</sup> <a name="MaxDisplayResolution" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.maxDisplayResolution"></a>

```go
func MaxDisplayResolution() *string
```

- *Type:* *string

---

##### `ToolbarType`<sup>Required</sup> <a name="ToolbarType" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.toolbarType"></a>

```go
func ToolbarType() *string
```

- *Type:* *string

---

##### `VisualMode`<sup>Required</sup> <a name="VisualMode" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.visualMode"></a>

```go
func VisualMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccWorkspaceswebUserSettingsToolbarConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspaceswebUserSettings.DataAwsccWorkspaceswebUserSettingsToolbarConfiguration">DataAwsccWorkspaceswebUserSettingsToolbarConfiguration</a>

---



