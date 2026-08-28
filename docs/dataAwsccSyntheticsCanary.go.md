# `dataAwsccSyntheticsCanary` Submodule <a name="`dataAwsccSyntheticsCanary` Submodule" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSyntheticsCanary <a name="DataAwsccSyntheticsCanary" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/synthetics_canary awscc_synthetics_canary}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsyntheticscanary"

dataawsccsyntheticscanary.NewDataAwsccSyntheticsCanary(scope Construct, id *string, config DataAwsccSyntheticsCanaryConfig) DataAwsccSyntheticsCanary
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig">DataAwsccSyntheticsCanaryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig">DataAwsccSyntheticsCanaryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSyntheticsCanary resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsyntheticscanary"

dataawsccsyntheticscanary.DataAwsccSyntheticsCanary_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsyntheticscanary"

dataawsccsyntheticscanary.DataAwsccSyntheticsCanary_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsyntheticscanary"

dataawsccsyntheticscanary.DataAwsccSyntheticsCanary_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsyntheticscanary"

dataawsccsyntheticscanary.DataAwsccSyntheticsCanary_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccSyntheticsCanary resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccSyntheticsCanary to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccSyntheticsCanary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/synthetics_canary#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSyntheticsCanary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.artifactConfig">ArtifactConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference">DataAwsccSyntheticsCanaryArtifactConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.artifactS3Location">ArtifactS3Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.browserConfigs">BrowserConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList">DataAwsccSyntheticsCanaryBrowserConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.canaryId">CanaryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.code">Code</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference">DataAwsccSyntheticsCanaryCodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.deleteLambdaResourcesOnCanaryDeletion">DeleteLambdaResourcesOnCanaryDeletion</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.dryRunAndUpdate">DryRunAndUpdate</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.failureRetentionPeriod">FailureRetentionPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.provisionedResourceCleanup">ProvisionedResourceCleanup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.resourcesToReplicateTags">ResourcesToReplicateTags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.runConfig">RunConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference">DataAwsccSyntheticsCanaryRunConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.runtimeVersion">RuntimeVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference">DataAwsccSyntheticsCanaryScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.startCanaryAfterCreation">StartCanaryAfterCreation</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.successRetentionPeriod">SuccessRetentionPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList">DataAwsccSyntheticsCanaryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.visualReference">VisualReference</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference">DataAwsccSyntheticsCanaryVisualReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.visualReferences">VisualReferences</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList">DataAwsccSyntheticsCanaryVisualReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference">DataAwsccSyntheticsCanaryVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ArtifactConfig`<sup>Required</sup> <a name="ArtifactConfig" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.artifactConfig"></a>

```go
func ArtifactConfig() DataAwsccSyntheticsCanaryArtifactConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference">DataAwsccSyntheticsCanaryArtifactConfigOutputReference</a>

---

##### `ArtifactS3Location`<sup>Required</sup> <a name="ArtifactS3Location" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.artifactS3Location"></a>

```go
func ArtifactS3Location() *string
```

- *Type:* *string

---

##### `BrowserConfigs`<sup>Required</sup> <a name="BrowserConfigs" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.browserConfigs"></a>

```go
func BrowserConfigs() DataAwsccSyntheticsCanaryBrowserConfigsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList">DataAwsccSyntheticsCanaryBrowserConfigsList</a>

---

##### `CanaryId`<sup>Required</sup> <a name="CanaryId" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.canaryId"></a>

```go
func CanaryId() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.code"></a>

```go
func Code() DataAwsccSyntheticsCanaryCodeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference">DataAwsccSyntheticsCanaryCodeOutputReference</a>

---

##### `DeleteLambdaResourcesOnCanaryDeletion`<sup>Required</sup> <a name="DeleteLambdaResourcesOnCanaryDeletion" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.deleteLambdaResourcesOnCanaryDeletion"></a>

```go
func DeleteLambdaResourcesOnCanaryDeletion() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `DryRunAndUpdate`<sup>Required</sup> <a name="DryRunAndUpdate" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.dryRunAndUpdate"></a>

```go
func DryRunAndUpdate() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.executionRoleArn"></a>

```go
func ExecutionRoleArn() *string
```

- *Type:* *string

---

##### `FailureRetentionPeriod`<sup>Required</sup> <a name="FailureRetentionPeriod" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.failureRetentionPeriod"></a>

```go
func FailureRetentionPeriod() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProvisionedResourceCleanup`<sup>Required</sup> <a name="ProvisionedResourceCleanup" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.provisionedResourceCleanup"></a>

```go
func ProvisionedResourceCleanup() *string
```

- *Type:* *string

---

##### `ResourcesToReplicateTags`<sup>Required</sup> <a name="ResourcesToReplicateTags" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.resourcesToReplicateTags"></a>

```go
func ResourcesToReplicateTags() *[]*string
```

- *Type:* *[]*string

---

##### `RunConfig`<sup>Required</sup> <a name="RunConfig" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.runConfig"></a>

```go
func RunConfig() DataAwsccSyntheticsCanaryRunConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference">DataAwsccSyntheticsCanaryRunConfigOutputReference</a>

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.runtimeVersion"></a>

```go
func RuntimeVersion() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.schedule"></a>

```go
func Schedule() DataAwsccSyntheticsCanaryScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference">DataAwsccSyntheticsCanaryScheduleOutputReference</a>

---

##### `StartCanaryAfterCreation`<sup>Required</sup> <a name="StartCanaryAfterCreation" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.startCanaryAfterCreation"></a>

```go
func StartCanaryAfterCreation() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SuccessRetentionPeriod`<sup>Required</sup> <a name="SuccessRetentionPeriod" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.successRetentionPeriod"></a>

```go
func SuccessRetentionPeriod() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.tags"></a>

```go
func Tags() DataAwsccSyntheticsCanaryTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList">DataAwsccSyntheticsCanaryTagsList</a>

---

##### `VisualReference`<sup>Required</sup> <a name="VisualReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.visualReference"></a>

```go
func VisualReference() DataAwsccSyntheticsCanaryVisualReferenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference">DataAwsccSyntheticsCanaryVisualReferenceOutputReference</a>

---

##### `VisualReferences`<sup>Required</sup> <a name="VisualReferences" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.visualReferences"></a>

```go
func VisualReferences() DataAwsccSyntheticsCanaryVisualReferencesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList">DataAwsccSyntheticsCanaryVisualReferencesList</a>

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.vpcConfig"></a>

```go
func VpcConfig() DataAwsccSyntheticsCanaryVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference">DataAwsccSyntheticsCanaryVpcConfigOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanary.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSyntheticsCanaryArtifactConfig <a name="DataAwsccSyntheticsCanaryArtifactConfig" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsyntheticscanary"

&dataawsccsyntheticscanary.DataAwsccSyntheticsCanaryArtifactConfig {

}
```


### DataAwsccSyntheticsCanaryArtifactConfigS3Encryption <a name="DataAwsccSyntheticsCanaryArtifactConfigS3Encryption" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3Encryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3Encryption.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsyntheticscanary"

&dataawsccsyntheticscanary.DataAwsccSyntheticsCanaryArtifactConfigS3Encryption {

}
```


### DataAwsccSyntheticsCanaryBrowserConfigs <a name="DataAwsccSyntheticsCanaryBrowserConfigs" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsyntheticscanary"

&dataawsccsyntheticscanary.DataAwsccSyntheticsCanaryBrowserConfigs {

}
```


### DataAwsccSyntheticsCanaryCode <a name="DataAwsccSyntheticsCanaryCode" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCode.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsyntheticscanary"

&dataawsccsyntheticscanary.DataAwsccSyntheticsCanaryCode {

}
```


### DataAwsccSyntheticsCanaryCodeDependencies <a name="DataAwsccSyntheticsCanaryCodeDependencies" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependencies.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsyntheticscanary"

&dataawsccsyntheticscanary.DataAwsccSyntheticsCanaryCodeDependencies {

}
```


### DataAwsccSyntheticsCanaryConfig <a name="DataAwsccSyntheticsCanaryConfig" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsyntheticscanary"

&dataawsccsyntheticscanary.DataAwsccSyntheticsCanaryConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/synthetics_canary#id DataAwsccSyntheticsCanary#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSyntheticsCanaryRunConfig <a name="DataAwsccSyntheticsCanaryRunConfig" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsyntheticscanary"

&dataawsccsyntheticscanary.DataAwsccSyntheticsCanaryRunConfig {

}
```


### DataAwsccSyntheticsCanarySchedule <a name="DataAwsccSyntheticsCanarySchedule" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanarySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanarySchedule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsyntheticscanary"

&dataawsccsyntheticscanary.DataAwsccSyntheticsCanarySchedule {

}
```


### DataAwsccSyntheticsCanaryScheduleRetryConfig <a name="DataAwsccSyntheticsCanaryScheduleRetryConfig" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsyntheticscanary"

&dataawsccsyntheticscanary.DataAwsccSyntheticsCanaryScheduleRetryConfig {

}
```


### DataAwsccSyntheticsCanaryTags <a name="DataAwsccSyntheticsCanaryTags" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsyntheticscanary"

&dataawsccsyntheticscanary.DataAwsccSyntheticsCanaryTags {

}
```


### DataAwsccSyntheticsCanaryVisualReference <a name="DataAwsccSyntheticsCanaryVisualReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsyntheticscanary"

&dataawsccsyntheticscanary.DataAwsccSyntheticsCanaryVisualReference {

}
```


### DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots <a name="DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsyntheticscanary"

&dataawsccsyntheticscanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots {

}
```


### DataAwsccSyntheticsCanaryVisualReferences <a name="DataAwsccSyntheticsCanaryVisualReferences" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferences.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsyntheticscanary"

&dataawsccsyntheticscanary.DataAwsccSyntheticsCanaryVisualReferences {

}
```


### DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots <a name="DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsyntheticscanary"

&dataawsccsyntheticscanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots {

}
```


### DataAwsccSyntheticsCanaryVpcConfig <a name="DataAwsccSyntheticsCanaryVpcConfig" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsyntheticscanary"

&dataawsccsyntheticscanary.DataAwsccSyntheticsCanaryVpcConfig {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSyntheticsCanaryArtifactConfigOutputReference <a name="DataAwsccSyntheticsCanaryArtifactConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsyntheticscanary"

dataawsccsyntheticscanary.NewDataAwsccSyntheticsCanaryArtifactConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSyntheticsCanaryArtifactConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.property.s3Encryption">S3Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference">DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfig">DataAwsccSyntheticsCanaryArtifactConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3Encryption`<sup>Required</sup> <a name="S3Encryption" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.property.s3Encryption"></a>

```go
func S3Encryption() DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference">DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSyntheticsCanaryArtifactConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfig">DataAwsccSyntheticsCanaryArtifactConfig</a>

---


### DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference <a name="DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsyntheticscanary"

dataawsccsyntheticscanary.NewDataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.encryptionMode">EncryptionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3Encryption">DataAwsccSyntheticsCanaryArtifactConfigS3Encryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionMode`<sup>Required</sup> <a name="EncryptionMode" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.encryptionMode"></a>

```go
func EncryptionMode() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSyntheticsCanaryArtifactConfigS3Encryption
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryArtifactConfigS3Encryption">DataAwsccSyntheticsCanaryArtifactConfigS3Encryption</a>

---


### DataAwsccSyntheticsCanaryBrowserConfigsList <a name="DataAwsccSyntheticsCanaryBrowserConfigsList" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsyntheticscanary"

dataawsccsyntheticscanary.NewDataAwsccSyntheticsCanaryBrowserConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSyntheticsCanaryBrowserConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.get"></a>

```go
func Get(index *f64) DataAwsccSyntheticsCanaryBrowserConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSyntheticsCanaryBrowserConfigsOutputReference <a name="DataAwsccSyntheticsCanaryBrowserConfigsOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsyntheticscanary"

dataawsccsyntheticscanary.NewDataAwsccSyntheticsCanaryBrowserConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSyntheticsCanaryBrowserConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.property.browserType">BrowserType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigs">DataAwsccSyntheticsCanaryBrowserConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BrowserType`<sup>Required</sup> <a name="BrowserType" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.property.browserType"></a>

```go
func BrowserType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSyntheticsCanaryBrowserConfigs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryBrowserConfigs">DataAwsccSyntheticsCanaryBrowserConfigs</a>

---


### DataAwsccSyntheticsCanaryCodeDependenciesList <a name="DataAwsccSyntheticsCanaryCodeDependenciesList" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsyntheticscanary"

dataawsccsyntheticscanary.NewDataAwsccSyntheticsCanaryCodeDependenciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSyntheticsCanaryCodeDependenciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.get"></a>

```go
func Get(index *f64) DataAwsccSyntheticsCanaryCodeDependenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSyntheticsCanaryCodeDependenciesOutputReference <a name="DataAwsccSyntheticsCanaryCodeDependenciesOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsyntheticscanary"

dataawsccsyntheticscanary.NewDataAwsccSyntheticsCanaryCodeDependenciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSyntheticsCanaryCodeDependenciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.property.reference">Reference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependencies">DataAwsccSyntheticsCanaryCodeDependencies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Reference`<sup>Required</sup> <a name="Reference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.property.reference"></a>

```go
func Reference() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSyntheticsCanaryCodeDependencies
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependencies">DataAwsccSyntheticsCanaryCodeDependencies</a>

---


### DataAwsccSyntheticsCanaryCodeOutputReference <a name="DataAwsccSyntheticsCanaryCodeOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsyntheticscanary"

dataawsccsyntheticscanary.NewDataAwsccSyntheticsCanaryCodeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSyntheticsCanaryCodeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.blueprintTypes">BlueprintTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.dependencies">Dependencies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList">DataAwsccSyntheticsCanaryCodeDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.handler">Handler</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.s3Bucket">S3Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.s3Key">S3Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.s3ObjectVersion">S3ObjectVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.script">Script</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.sourceLocationArn">SourceLocationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCode">DataAwsccSyntheticsCanaryCode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BlueprintTypes`<sup>Required</sup> <a name="BlueprintTypes" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.blueprintTypes"></a>

```go
func BlueprintTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Dependencies`<sup>Required</sup> <a name="Dependencies" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.dependencies"></a>

```go
func Dependencies() DataAwsccSyntheticsCanaryCodeDependenciesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeDependenciesList">DataAwsccSyntheticsCanaryCodeDependenciesList</a>

---

##### `Handler`<sup>Required</sup> <a name="Handler" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.handler"></a>

```go
func Handler() *string
```

- *Type:* *string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.s3Bucket"></a>

```go
func S3Bucket() *string
```

- *Type:* *string

---

##### `S3Key`<sup>Required</sup> <a name="S3Key" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.s3Key"></a>

```go
func S3Key() *string
```

- *Type:* *string

---

##### `S3ObjectVersion`<sup>Required</sup> <a name="S3ObjectVersion" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.s3ObjectVersion"></a>

```go
func S3ObjectVersion() *string
```

- *Type:* *string

---

##### `Script`<sup>Required</sup> <a name="Script" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.script"></a>

```go
func Script() *string
```

- *Type:* *string

---

##### `SourceLocationArn`<sup>Required</sup> <a name="SourceLocationArn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.sourceLocationArn"></a>

```go
func SourceLocationArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCodeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSyntheticsCanaryCode
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryCode">DataAwsccSyntheticsCanaryCode</a>

---


### DataAwsccSyntheticsCanaryRunConfigOutputReference <a name="DataAwsccSyntheticsCanaryRunConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsyntheticscanary"

dataawsccsyntheticscanary.NewDataAwsccSyntheticsCanaryRunConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSyntheticsCanaryRunConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.activeTracing">ActiveTracing</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.environmentVariables">EnvironmentVariables</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.ephemeralStorage">EphemeralStorage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.memoryInMb">MemoryInMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfig">DataAwsccSyntheticsCanaryRunConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActiveTracing`<sup>Required</sup> <a name="ActiveTracing" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.activeTracing"></a>

```go
func ActiveTracing() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.environmentVariables"></a>

```go
func EnvironmentVariables() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `EphemeralStorage`<sup>Required</sup> <a name="EphemeralStorage" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.ephemeralStorage"></a>

```go
func EphemeralStorage() *f64
```

- *Type:* *f64

---

##### `MemoryInMb`<sup>Required</sup> <a name="MemoryInMb" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.memoryInMb"></a>

```go
func MemoryInMb() *f64
```

- *Type:* *f64

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.timeoutInSeconds"></a>

```go
func TimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSyntheticsCanaryRunConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryRunConfig">DataAwsccSyntheticsCanaryRunConfig</a>

---


### DataAwsccSyntheticsCanaryScheduleOutputReference <a name="DataAwsccSyntheticsCanaryScheduleOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsyntheticscanary"

dataawsccsyntheticscanary.NewDataAwsccSyntheticsCanaryScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSyntheticsCanaryScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.durationInSeconds">DurationInSeconds</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.retryConfig">RetryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference">DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanarySchedule">DataAwsccSyntheticsCanarySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurationInSeconds`<sup>Required</sup> <a name="DurationInSeconds" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.durationInSeconds"></a>

```go
func DurationInSeconds() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `RetryConfig`<sup>Required</sup> <a name="RetryConfig" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.retryConfig"></a>

```go
func RetryConfig() DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference">DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSyntheticsCanarySchedule
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanarySchedule">DataAwsccSyntheticsCanarySchedule</a>

---


### DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference <a name="DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsyntheticscanary"

dataawsccsyntheticscanary.NewDataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.property.maxRetries">MaxRetries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfig">DataAwsccSyntheticsCanaryScheduleRetryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxRetries`<sup>Required</sup> <a name="MaxRetries" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.property.maxRetries"></a>

```go
func MaxRetries() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSyntheticsCanaryScheduleRetryConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryScheduleRetryConfig">DataAwsccSyntheticsCanaryScheduleRetryConfig</a>

---


### DataAwsccSyntheticsCanaryTagsList <a name="DataAwsccSyntheticsCanaryTagsList" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsyntheticscanary"

dataawsccsyntheticscanary.NewDataAwsccSyntheticsCanaryTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSyntheticsCanaryTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.get"></a>

```go
func Get(index *f64) DataAwsccSyntheticsCanaryTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSyntheticsCanaryTagsOutputReference <a name="DataAwsccSyntheticsCanaryTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsyntheticscanary"

dataawsccsyntheticscanary.NewDataAwsccSyntheticsCanaryTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSyntheticsCanaryTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTags">DataAwsccSyntheticsCanaryTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSyntheticsCanaryTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryTags">DataAwsccSyntheticsCanaryTags</a>

---


### DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList <a name="DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsyntheticscanary"

dataawsccsyntheticscanary.NewDataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.get"></a>

```go
func Get(index *f64) DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference <a name="DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsyntheticscanary"

dataawsccsyntheticscanary.NewDataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.ignoreCoordinates">IgnoreCoordinates</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.screenshotName">ScreenshotName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots">DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IgnoreCoordinates`<sup>Required</sup> <a name="IgnoreCoordinates" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.ignoreCoordinates"></a>

```go
func IgnoreCoordinates() *[]*string
```

- *Type:* *[]*string

---

##### `ScreenshotName`<sup>Required</sup> <a name="ScreenshotName" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.screenshotName"></a>

```go
func ScreenshotName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots">DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshots</a>

---


### DataAwsccSyntheticsCanaryVisualReferenceOutputReference <a name="DataAwsccSyntheticsCanaryVisualReferenceOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsyntheticscanary"

dataawsccsyntheticscanary.NewDataAwsccSyntheticsCanaryVisualReferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSyntheticsCanaryVisualReferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.baseCanaryRunId">BaseCanaryRunId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.baseScreenshots">BaseScreenshots</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList">DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.browserType">BrowserType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReference">DataAwsccSyntheticsCanaryVisualReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaseCanaryRunId`<sup>Required</sup> <a name="BaseCanaryRunId" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.baseCanaryRunId"></a>

```go
func BaseCanaryRunId() *string
```

- *Type:* *string

---

##### `BaseScreenshots`<sup>Required</sup> <a name="BaseScreenshots" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.baseScreenshots"></a>

```go
func BaseScreenshots() DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList">DataAwsccSyntheticsCanaryVisualReferenceBaseScreenshotsList</a>

---

##### `BrowserType`<sup>Required</sup> <a name="BrowserType" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.browserType"></a>

```go
func BrowserType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSyntheticsCanaryVisualReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReference">DataAwsccSyntheticsCanaryVisualReference</a>

---


### DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList <a name="DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsyntheticscanary"

dataawsccsyntheticscanary.NewDataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.get"></a>

```go
func Get(index *f64) DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference <a name="DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsyntheticscanary"

dataawsccsyntheticscanary.NewDataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.ignoreCoordinates">IgnoreCoordinates</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.screenshotName">ScreenshotName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots">DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IgnoreCoordinates`<sup>Required</sup> <a name="IgnoreCoordinates" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.ignoreCoordinates"></a>

```go
func IgnoreCoordinates() *[]*string
```

- *Type:* *[]*string

---

##### `ScreenshotName`<sup>Required</sup> <a name="ScreenshotName" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.screenshotName"></a>

```go
func ScreenshotName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots">DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshots</a>

---


### DataAwsccSyntheticsCanaryVisualReferencesList <a name="DataAwsccSyntheticsCanaryVisualReferencesList" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsyntheticscanary"

dataawsccsyntheticscanary.NewDataAwsccSyntheticsCanaryVisualReferencesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSyntheticsCanaryVisualReferencesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.get"></a>

```go
func Get(index *f64) DataAwsccSyntheticsCanaryVisualReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSyntheticsCanaryVisualReferencesOutputReference <a name="DataAwsccSyntheticsCanaryVisualReferencesOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsyntheticscanary"

dataawsccsyntheticscanary.NewDataAwsccSyntheticsCanaryVisualReferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSyntheticsCanaryVisualReferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.baseCanaryRunId">BaseCanaryRunId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.baseScreenshots">BaseScreenshots</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList">DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.browserType">BrowserType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferences">DataAwsccSyntheticsCanaryVisualReferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaseCanaryRunId`<sup>Required</sup> <a name="BaseCanaryRunId" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.baseCanaryRunId"></a>

```go
func BaseCanaryRunId() *string
```

- *Type:* *string

---

##### `BaseScreenshots`<sup>Required</sup> <a name="BaseScreenshots" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.baseScreenshots"></a>

```go
func BaseScreenshots() DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList">DataAwsccSyntheticsCanaryVisualReferencesBaseScreenshotsList</a>

---

##### `BrowserType`<sup>Required</sup> <a name="BrowserType" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.browserType"></a>

```go
func BrowserType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSyntheticsCanaryVisualReferences
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVisualReferences">DataAwsccSyntheticsCanaryVisualReferences</a>

---


### DataAwsccSyntheticsCanaryVpcConfigOutputReference <a name="DataAwsccSyntheticsCanaryVpcConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsyntheticscanary"

dataawsccsyntheticscanary.NewDataAwsccSyntheticsCanaryVpcConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSyntheticsCanaryVpcConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.ipv6AllowedForDualStack">Ipv6AllowedForDualStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfig">DataAwsccSyntheticsCanaryVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ipv6AllowedForDualStack`<sup>Required</sup> <a name="Ipv6AllowedForDualStack" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.ipv6AllowedForDualStack"></a>

```go
func Ipv6AllowedForDualStack() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSyntheticsCanaryVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSyntheticsCanary.DataAwsccSyntheticsCanaryVpcConfig">DataAwsccSyntheticsCanaryVpcConfig</a>

---



