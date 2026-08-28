# `dataAwsccIotSecurityProfile` Submodule <a name="`dataAwsccIotSecurityProfile` Submodule" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotSecurityProfile <a name="DataAwsccIotSecurityProfile" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iot_security_profile awscc_iot_security_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecurityprofile"

dataawscciotsecurityprofile.NewDataAwsccIotSecurityProfile(scope Construct, id *string, config DataAwsccIotSecurityProfileConfig) DataAwsccIotSecurityProfile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig">DataAwsccIotSecurityProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig">DataAwsccIotSecurityProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIotSecurityProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecurityprofile"

dataawscciotsecurityprofile.DataAwsccIotSecurityProfile_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecurityprofile"

dataawscciotsecurityprofile.DataAwsccIotSecurityProfile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecurityprofile"

dataawscciotsecurityprofile.DataAwsccIotSecurityProfile_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecurityprofile"

dataawscciotsecurityprofile.DataAwsccIotSecurityProfile_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccIotSecurityProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccIotSecurityProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccIotSecurityProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iot_security_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotSecurityProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.additionalMetricsToRetainV2">AdditionalMetricsToRetainV2</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List">DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.alertTargets">AlertTargets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap">DataAwsccIotSecurityProfileAlertTargetsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.behaviors">Behaviors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList">DataAwsccIotSecurityProfileBehaviorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.metricsExportConfig">MetricsExportConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference">DataAwsccIotSecurityProfileMetricsExportConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.securityProfileArn">SecurityProfileArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.securityProfileDescription">SecurityProfileDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.securityProfileName">SecurityProfileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList">DataAwsccIotSecurityProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.targetArns">TargetArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AdditionalMetricsToRetainV2`<sup>Required</sup> <a name="AdditionalMetricsToRetainV2" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.additionalMetricsToRetainV2"></a>

```go
func AdditionalMetricsToRetainV2() DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List">DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List</a>

---

##### `AlertTargets`<sup>Required</sup> <a name="AlertTargets" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.alertTargets"></a>

```go
func AlertTargets() DataAwsccIotSecurityProfileAlertTargetsMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap">DataAwsccIotSecurityProfileAlertTargetsMap</a>

---

##### `Behaviors`<sup>Required</sup> <a name="Behaviors" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.behaviors"></a>

```go
func Behaviors() DataAwsccIotSecurityProfileBehaviorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList">DataAwsccIotSecurityProfileBehaviorsList</a>

---

##### `MetricsExportConfig`<sup>Required</sup> <a name="MetricsExportConfig" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.metricsExportConfig"></a>

```go
func MetricsExportConfig() DataAwsccIotSecurityProfileMetricsExportConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference">DataAwsccIotSecurityProfileMetricsExportConfigOutputReference</a>

---

##### `SecurityProfileArn`<sup>Required</sup> <a name="SecurityProfileArn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.securityProfileArn"></a>

```go
func SecurityProfileArn() *string
```

- *Type:* *string

---

##### `SecurityProfileDescription`<sup>Required</sup> <a name="SecurityProfileDescription" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.securityProfileDescription"></a>

```go
func SecurityProfileDescription() *string
```

- *Type:* *string

---

##### `SecurityProfileName`<sup>Required</sup> <a name="SecurityProfileName" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.securityProfileName"></a>

```go
func SecurityProfileName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.tags"></a>

```go
func Tags() DataAwsccIotSecurityProfileTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList">DataAwsccIotSecurityProfileTagsList</a>

---

##### `TargetArns`<sup>Required</sup> <a name="TargetArns" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.targetArns"></a>

```go
func TargetArns() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2 <a name="DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecurityprofile"

&dataawscciotsecurityprofile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2 {

}
```


### DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimension <a name="DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimension" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimension"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimension.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecurityprofile"

&dataawscciotsecurityprofile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimension {

}
```


### DataAwsccIotSecurityProfileAlertTargets <a name="DataAwsccIotSecurityProfileAlertTargets" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecurityprofile"

&dataawscciotsecurityprofile.DataAwsccIotSecurityProfileAlertTargets {

}
```


### DataAwsccIotSecurityProfileBehaviors <a name="DataAwsccIotSecurityProfileBehaviors" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecurityprofile"

&dataawscciotsecurityprofile.DataAwsccIotSecurityProfileBehaviors {

}
```


### DataAwsccIotSecurityProfileBehaviorsCriteria <a name="DataAwsccIotSecurityProfileBehaviorsCriteria" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteria.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecurityprofile"

&dataawscciotsecurityprofile.DataAwsccIotSecurityProfileBehaviorsCriteria {

}
```


### DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfig <a name="DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfig" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecurityprofile"

&dataawscciotsecurityprofile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfig {

}
```


### DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThreshold <a name="DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThreshold" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThreshold.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecurityprofile"

&dataawscciotsecurityprofile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThreshold {

}
```


### DataAwsccIotSecurityProfileBehaviorsCriteriaValue <a name="DataAwsccIotSecurityProfileBehaviorsCriteriaValue" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecurityprofile"

&dataawscciotsecurityprofile.DataAwsccIotSecurityProfileBehaviorsCriteriaValue {

}
```


### DataAwsccIotSecurityProfileBehaviorsMetricDimension <a name="DataAwsccIotSecurityProfileBehaviorsMetricDimension" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimension"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimension.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecurityprofile"

&dataawscciotsecurityprofile.DataAwsccIotSecurityProfileBehaviorsMetricDimension {

}
```


### DataAwsccIotSecurityProfileConfig <a name="DataAwsccIotSecurityProfileConfig" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecurityprofile"

&dataawscciotsecurityprofile.DataAwsccIotSecurityProfileConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iot_security_profile#id DataAwsccIotSecurityProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotSecurityProfileMetricsExportConfig <a name="DataAwsccIotSecurityProfileMetricsExportConfig" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecurityprofile"

&dataawscciotsecurityprofile.DataAwsccIotSecurityProfileMetricsExportConfig {

}
```


### DataAwsccIotSecurityProfileTags <a name="DataAwsccIotSecurityProfileTags" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecurityprofile"

&dataawscciotsecurityprofile.DataAwsccIotSecurityProfileTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List <a name="DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecurityprofile"

dataawscciotsecurityprofile.NewDataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.get"></a>

```go
func Get(index *f64) DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference <a name="DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecurityprofile"

dataawscciotsecurityprofile.NewDataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.dimensionName">DimensionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimension">DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimension</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DimensionName`<sup>Required</sup> <a name="DimensionName" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.dimensionName"></a>

```go
func DimensionName() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimension
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimension">DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimension</a>

---


### DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference <a name="DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecurityprofile"

dataawscciotsecurityprofile.NewDataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.exportMetric">ExportMetric</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.metric">Metric</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.metricDimension">MetricDimension</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference">DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2">DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExportMetric`<sup>Required</sup> <a name="ExportMetric" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.exportMetric"></a>

```go
func ExportMetric() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.metric"></a>

```go
func Metric() *string
```

- *Type:* *string

---

##### `MetricDimension`<sup>Required</sup> <a name="MetricDimension" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.metricDimension"></a>

```go
func MetricDimension() DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference">DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2">DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2</a>

---


### DataAwsccIotSecurityProfileAlertTargetsMap <a name="DataAwsccIotSecurityProfileAlertTargetsMap" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecurityprofile"

dataawscciotsecurityprofile.NewDataAwsccIotSecurityProfileAlertTargetsMap(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotSecurityProfileAlertTargetsMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.get"></a>

```go
func Get(key *string) DataAwsccIotSecurityProfileAlertTargetsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccIotSecurityProfileAlertTargetsOutputReference <a name="DataAwsccIotSecurityProfileAlertTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecurityprofile"

dataawscciotsecurityprofile.NewDataAwsccIotSecurityProfileAlertTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) DataAwsccIotSecurityProfileAlertTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.property.alertTargetArn">AlertTargetArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargets">DataAwsccIotSecurityProfileAlertTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlertTargetArn`<sup>Required</sup> <a name="AlertTargetArn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.property.alertTargetArn"></a>

```go
func AlertTargetArn() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotSecurityProfileAlertTargets
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargets">DataAwsccIotSecurityProfileAlertTargets</a>

---


### DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference <a name="DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecurityprofile"

dataawscciotsecurityprofile.NewDataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.confidenceLevel">ConfidenceLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfig">DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfidenceLevel`<sup>Required</sup> <a name="ConfidenceLevel" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.confidenceLevel"></a>

```go
func ConfidenceLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfig">DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfig</a>

---


### DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference <a name="DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecurityprofile"

dataawscciotsecurityprofile.NewDataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.comparisonOperator">ComparisonOperator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.consecutiveDatapointsToAlarm">ConsecutiveDatapointsToAlarm</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.consecutiveDatapointsToClear">ConsecutiveDatapointsToClear</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.durationSeconds">DurationSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.mlDetectionConfig">MlDetectionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference">DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.statisticalThreshold">StatisticalThreshold</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference">DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference">DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteria">DataAwsccIotSecurityProfileBehaviorsCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.comparisonOperator"></a>

```go
func ComparisonOperator() *string
```

- *Type:* *string

---

##### `ConsecutiveDatapointsToAlarm`<sup>Required</sup> <a name="ConsecutiveDatapointsToAlarm" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.consecutiveDatapointsToAlarm"></a>

```go
func ConsecutiveDatapointsToAlarm() *f64
```

- *Type:* *f64

---

##### `ConsecutiveDatapointsToClear`<sup>Required</sup> <a name="ConsecutiveDatapointsToClear" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.consecutiveDatapointsToClear"></a>

```go
func ConsecutiveDatapointsToClear() *f64
```

- *Type:* *f64

---

##### `DurationSeconds`<sup>Required</sup> <a name="DurationSeconds" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.durationSeconds"></a>

```go
func DurationSeconds() *f64
```

- *Type:* *f64

---

##### `MlDetectionConfig`<sup>Required</sup> <a name="MlDetectionConfig" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.mlDetectionConfig"></a>

```go
func MlDetectionConfig() DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference">DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference</a>

---

##### `StatisticalThreshold`<sup>Required</sup> <a name="StatisticalThreshold" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.statisticalThreshold"></a>

```go
func StatisticalThreshold() DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference">DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference</a>

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.value"></a>

```go
func Value() DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference">DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotSecurityProfileBehaviorsCriteria
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteria">DataAwsccIotSecurityProfileBehaviorsCriteria</a>

---


### DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference <a name="DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecurityprofile"

dataawscciotsecurityprofile.NewDataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.statistic">Statistic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThreshold">DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Statistic`<sup>Required</sup> <a name="Statistic" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.statistic"></a>

```go
func Statistic() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThreshold
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThreshold">DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThreshold</a>

---


### DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference <a name="DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecurityprofile"

dataawscciotsecurityprofile.NewDataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.cidrs">Cidrs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.count">Count</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.number">Number</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.numbers">Numbers</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.ports">Ports</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.strings">Strings</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValue">DataAwsccIotSecurityProfileBehaviorsCriteriaValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Cidrs`<sup>Required</sup> <a name="Cidrs" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.cidrs"></a>

```go
func Cidrs() *[]*string
```

- *Type:* *[]*string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.count"></a>

```go
func Count() *string
```

- *Type:* *string

---

##### `Number`<sup>Required</sup> <a name="Number" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.number"></a>

```go
func Number() *f64
```

- *Type:* *f64

---

##### `Numbers`<sup>Required</sup> <a name="Numbers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.numbers"></a>

```go
func Numbers() *[]*f64
```

- *Type:* *[]*f64

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.ports"></a>

```go
func Ports() *[]*f64
```

- *Type:* *[]*f64

---

##### `Strings`<sup>Required</sup> <a name="Strings" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.strings"></a>

```go
func Strings() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotSecurityProfileBehaviorsCriteriaValue
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValue">DataAwsccIotSecurityProfileBehaviorsCriteriaValue</a>

---


### DataAwsccIotSecurityProfileBehaviorsList <a name="DataAwsccIotSecurityProfileBehaviorsList" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecurityprofile"

dataawscciotsecurityprofile.NewDataAwsccIotSecurityProfileBehaviorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccIotSecurityProfileBehaviorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.get"></a>

```go
func Get(index *f64) DataAwsccIotSecurityProfileBehaviorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference <a name="DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecurityprofile"

dataawscciotsecurityprofile.NewDataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.property.dimensionName">DimensionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimension">DataAwsccIotSecurityProfileBehaviorsMetricDimension</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DimensionName`<sup>Required</sup> <a name="DimensionName" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.property.dimensionName"></a>

```go
func DimensionName() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotSecurityProfileBehaviorsMetricDimension
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimension">DataAwsccIotSecurityProfileBehaviorsMetricDimension</a>

---


### DataAwsccIotSecurityProfileBehaviorsOutputReference <a name="DataAwsccIotSecurityProfileBehaviorsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecurityprofile"

dataawscciotsecurityprofile.NewDataAwsccIotSecurityProfileBehaviorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccIotSecurityProfileBehaviorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.criteria">Criteria</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference">DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.exportMetric">ExportMetric</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.metric">Metric</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.metricDimension">MetricDimension</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference">DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.suppressAlerts">SuppressAlerts</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviors">DataAwsccIotSecurityProfileBehaviors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.criteria"></a>

```go
func Criteria() DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference">DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference</a>

---

##### `ExportMetric`<sup>Required</sup> <a name="ExportMetric" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.exportMetric"></a>

```go
func ExportMetric() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.metric"></a>

```go
func Metric() *string
```

- *Type:* *string

---

##### `MetricDimension`<sup>Required</sup> <a name="MetricDimension" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.metricDimension"></a>

```go
func MetricDimension() DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference">DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SuppressAlerts`<sup>Required</sup> <a name="SuppressAlerts" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.suppressAlerts"></a>

```go
func SuppressAlerts() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotSecurityProfileBehaviors
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviors">DataAwsccIotSecurityProfileBehaviors</a>

---


### DataAwsccIotSecurityProfileMetricsExportConfigOutputReference <a name="DataAwsccIotSecurityProfileMetricsExportConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecurityprofile"

dataawscciotsecurityprofile.NewDataAwsccIotSecurityProfileMetricsExportConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccIotSecurityProfileMetricsExportConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.property.mqttTopic">MqttTopic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfig">DataAwsccIotSecurityProfileMetricsExportConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MqttTopic`<sup>Required</sup> <a name="MqttTopic" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.property.mqttTopic"></a>

```go
func MqttTopic() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotSecurityProfileMetricsExportConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfig">DataAwsccIotSecurityProfileMetricsExportConfig</a>

---


### DataAwsccIotSecurityProfileTagsList <a name="DataAwsccIotSecurityProfileTagsList" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecurityprofile"

dataawscciotsecurityprofile.NewDataAwsccIotSecurityProfileTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccIotSecurityProfileTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.get"></a>

```go
func Get(index *f64) DataAwsccIotSecurityProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccIotSecurityProfileTagsOutputReference <a name="DataAwsccIotSecurityProfileTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsecurityprofile"

dataawscciotsecurityprofile.NewDataAwsccIotSecurityProfileTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccIotSecurityProfileTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTags">DataAwsccIotSecurityProfileTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotSecurityProfileTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTags">DataAwsccIotSecurityProfileTags</a>

---



