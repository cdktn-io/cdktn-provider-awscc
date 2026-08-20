# `dataAwsccQbusinessWebExperience` Submodule <a name="`dataAwsccQbusinessWebExperience` Submodule" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccQbusinessWebExperience <a name="DataAwsccQbusinessWebExperience" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/qbusiness_web_experience awscc_qbusiness_web_experience}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinesswebexperience"

dataawsccqbusinesswebexperience.NewDataAwsccQbusinessWebExperience(scope Construct, id *string, config DataAwsccQbusinessWebExperienceConfig) DataAwsccQbusinessWebExperience
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceConfig">DataAwsccQbusinessWebExperienceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceConfig">DataAwsccQbusinessWebExperienceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccQbusinessWebExperience resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinesswebexperience"

dataawsccqbusinesswebexperience.DataAwsccQbusinessWebExperience_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinesswebexperience"

dataawsccqbusinesswebexperience.DataAwsccQbusinessWebExperience_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinesswebexperience"

dataawsccqbusinesswebexperience.DataAwsccQbusinessWebExperience_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinesswebexperience"

dataawsccqbusinesswebexperience.DataAwsccQbusinessWebExperience_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccQbusinessWebExperience resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccQbusinessWebExperience to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccQbusinessWebExperience that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/qbusiness_web_experience#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccQbusinessWebExperience to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.browserExtensionConfiguration">BrowserExtensionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference">DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.customizationConfiguration">CustomizationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference">DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.defaultEndpoint">DefaultEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.identityProviderConfiguration">IdentityProviderConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference">DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.origins">Origins</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.samplePromptsControlMode">SamplePromptsControlMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.subtitle">Subtitle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList">DataAwsccQbusinessWebExperienceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.webExperienceArn">WebExperienceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.webExperienceId">WebExperienceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.welcomeMessage">WelcomeMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `BrowserExtensionConfiguration`<sup>Required</sup> <a name="BrowserExtensionConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.browserExtensionConfiguration"></a>

```go
func BrowserExtensionConfiguration() DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference">DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CustomizationConfiguration`<sup>Required</sup> <a name="CustomizationConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.customizationConfiguration"></a>

```go
func CustomizationConfiguration() DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference">DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference</a>

---

##### `DefaultEndpoint`<sup>Required</sup> <a name="DefaultEndpoint" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.defaultEndpoint"></a>

```go
func DefaultEndpoint() *string
```

- *Type:* *string

---

##### `IdentityProviderConfiguration`<sup>Required</sup> <a name="IdentityProviderConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.identityProviderConfiguration"></a>

```go
func IdentityProviderConfiguration() DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference">DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference</a>

---

##### `Origins`<sup>Required</sup> <a name="Origins" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.origins"></a>

```go
func Origins() *[]*string
```

- *Type:* *[]*string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `SamplePromptsControlMode`<sup>Required</sup> <a name="SamplePromptsControlMode" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.samplePromptsControlMode"></a>

```go
func SamplePromptsControlMode() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Subtitle`<sup>Required</sup> <a name="Subtitle" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.subtitle"></a>

```go
func Subtitle() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.tags"></a>

```go
func Tags() DataAwsccQbusinessWebExperienceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList">DataAwsccQbusinessWebExperienceTagsList</a>

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `WebExperienceArn`<sup>Required</sup> <a name="WebExperienceArn" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.webExperienceArn"></a>

```go
func WebExperienceArn() *string
```

- *Type:* *string

---

##### `WebExperienceId`<sup>Required</sup> <a name="WebExperienceId" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.webExperienceId"></a>

```go
func WebExperienceId() *string
```

- *Type:* *string

---

##### `WelcomeMessage`<sup>Required</sup> <a name="WelcomeMessage" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.welcomeMessage"></a>

```go
func WelcomeMessage() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperience.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccQbusinessWebExperienceBrowserExtensionConfiguration <a name="DataAwsccQbusinessWebExperienceBrowserExtensionConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinesswebexperience"

&dataawsccqbusinesswebexperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfiguration {

}
```


### DataAwsccQbusinessWebExperienceConfig <a name="DataAwsccQbusinessWebExperienceConfig" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinesswebexperience"

&dataawsccqbusinesswebexperience.DataAwsccQbusinessWebExperienceConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/qbusiness_web_experience#id DataAwsccQbusinessWebExperience#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccQbusinessWebExperienceCustomizationConfiguration <a name="DataAwsccQbusinessWebExperienceCustomizationConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinesswebexperience"

&dataawsccqbusinesswebexperience.DataAwsccQbusinessWebExperienceCustomizationConfiguration {

}
```


### DataAwsccQbusinessWebExperienceIdentityProviderConfiguration <a name="DataAwsccQbusinessWebExperienceIdentityProviderConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinesswebexperience"

&dataawsccqbusinesswebexperience.DataAwsccQbusinessWebExperienceIdentityProviderConfiguration {

}
```


### DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration <a name="DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinesswebexperience"

&dataawsccqbusinesswebexperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration {

}
```


### DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration <a name="DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinesswebexperience"

&dataawsccqbusinesswebexperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration {

}
```


### DataAwsccQbusinessWebExperienceTags <a name="DataAwsccQbusinessWebExperienceTags" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinesswebexperience"

&dataawsccqbusinesswebexperience.DataAwsccQbusinessWebExperienceTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference <a name="DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinesswebexperience"

dataawsccqbusinesswebexperience.NewDataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.enabledBrowserExtensions">EnabledBrowserExtensions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfiguration">DataAwsccQbusinessWebExperienceBrowserExtensionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledBrowserExtensions`<sup>Required</sup> <a name="EnabledBrowserExtensions" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.enabledBrowserExtensions"></a>

```go
func EnabledBrowserExtensions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQbusinessWebExperienceBrowserExtensionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceBrowserExtensionConfiguration">DataAwsccQbusinessWebExperienceBrowserExtensionConfiguration</a>

---


### DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference <a name="DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinesswebexperience"

dataawsccqbusinesswebexperience.NewDataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.property.customCssUrl">CustomCssUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.property.faviconUrl">FaviconUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.property.fontUrl">FontUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.property.logoUrl">LogoUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfiguration">DataAwsccQbusinessWebExperienceCustomizationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomCssUrl`<sup>Required</sup> <a name="CustomCssUrl" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.property.customCssUrl"></a>

```go
func CustomCssUrl() *string
```

- *Type:* *string

---

##### `FaviconUrl`<sup>Required</sup> <a name="FaviconUrl" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.property.faviconUrl"></a>

```go
func FaviconUrl() *string
```

- *Type:* *string

---

##### `FontUrl`<sup>Required</sup> <a name="FontUrl" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.property.fontUrl"></a>

```go
func FontUrl() *string
```

- *Type:* *string

---

##### `LogoUrl`<sup>Required</sup> <a name="LogoUrl" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.property.logoUrl"></a>

```go
func LogoUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQbusinessWebExperienceCustomizationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceCustomizationConfiguration">DataAwsccQbusinessWebExperienceCustomizationConfiguration</a>

---


### DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference <a name="DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinesswebexperience"

dataawsccqbusinesswebexperience.NewDataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.secretsArn">SecretsArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.secretsRole">SecretsRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration">DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretsArn`<sup>Required</sup> <a name="SecretsArn" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.secretsArn"></a>

```go
func SecretsArn() *string
```

- *Type:* *string

---

##### `SecretsRole`<sup>Required</sup> <a name="SecretsRole" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.secretsRole"></a>

```go
func SecretsRole() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration">DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfiguration</a>

---


### DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference <a name="DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinesswebexperience"

dataawsccqbusinesswebexperience.NewDataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.openIdConnectConfiguration">OpenIdConnectConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference">DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.samlConfiguration">SamlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference">DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfiguration">DataAwsccQbusinessWebExperienceIdentityProviderConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OpenIdConnectConfiguration`<sup>Required</sup> <a name="OpenIdConnectConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.openIdConnectConfiguration"></a>

```go
func OpenIdConnectConfiguration() DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference">DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOpenIdConnectConfigurationOutputReference</a>

---

##### `SamlConfiguration`<sup>Required</sup> <a name="SamlConfiguration" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.samlConfiguration"></a>

```go
func SamlConfiguration() DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference">DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQbusinessWebExperienceIdentityProviderConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfiguration">DataAwsccQbusinessWebExperienceIdentityProviderConfiguration</a>

---


### DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference <a name="DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinesswebexperience"

dataawsccqbusinesswebexperience.NewDataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.authenticationUrl">AuthenticationUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration">DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticationUrl`<sup>Required</sup> <a name="AuthenticationUrl" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.authenticationUrl"></a>

```go
func AuthenticationUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration">DataAwsccQbusinessWebExperienceIdentityProviderConfigurationSamlConfiguration</a>

---


### DataAwsccQbusinessWebExperienceTagsList <a name="DataAwsccQbusinessWebExperienceTagsList" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinesswebexperience"

dataawsccqbusinesswebexperience.NewDataAwsccQbusinessWebExperienceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccQbusinessWebExperienceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.get"></a>

```go
func Get(index *f64) DataAwsccQbusinessWebExperienceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccQbusinessWebExperienceTagsOutputReference <a name="DataAwsccQbusinessWebExperienceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccqbusinesswebexperience"

dataawsccqbusinesswebexperience.NewDataAwsccQbusinessWebExperienceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccQbusinessWebExperienceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTags">DataAwsccQbusinessWebExperienceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccQbusinessWebExperienceTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQbusinessWebExperience.DataAwsccQbusinessWebExperienceTags">DataAwsccQbusinessWebExperienceTags</a>

---



