# `dataAwsccCloudfrontMonitoringSubscription` Submodule <a name="`dataAwsccCloudfrontMonitoringSubscription` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudfrontMonitoringSubscription <a name="DataAwsccCloudfrontMonitoringSubscription" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudfront_monitoring_subscription awscc_cloudfront_monitoring_subscription}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontmonitoringsubscription"

dataawscccloudfrontmonitoringsubscription.NewDataAwsccCloudfrontMonitoringSubscription(scope Construct, id *string, config DataAwsccCloudfrontMonitoringSubscriptionConfig) DataAwsccCloudfrontMonitoringSubscription
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionConfig">DataAwsccCloudfrontMonitoringSubscriptionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionConfig">DataAwsccCloudfrontMonitoringSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCloudfrontMonitoringSubscription resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontmonitoringsubscription"

dataawscccloudfrontmonitoringsubscription.DataAwsccCloudfrontMonitoringSubscription_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontmonitoringsubscription"

dataawscccloudfrontmonitoringsubscription.DataAwsccCloudfrontMonitoringSubscription_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontmonitoringsubscription"

dataawscccloudfrontmonitoringsubscription.DataAwsccCloudfrontMonitoringSubscription_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontmonitoringsubscription"

dataawscccloudfrontmonitoringsubscription.DataAwsccCloudfrontMonitoringSubscription_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccCloudfrontMonitoringSubscription resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccCloudfrontMonitoringSubscription to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccCloudfrontMonitoringSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudfront_monitoring_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudfrontMonitoringSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.property.distributionId">DistributionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.property.monitoringSubscription">MonitoringSubscription</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference">DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `DistributionId`<sup>Required</sup> <a name="DistributionId" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.property.distributionId"></a>

```go
func DistributionId() *string
```

- *Type:* *string

---

##### `MonitoringSubscription`<sup>Required</sup> <a name="MonitoringSubscription" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.property.monitoringSubscription"></a>

```go
func MonitoringSubscription() DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference">DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscription.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudfrontMonitoringSubscriptionConfig <a name="DataAwsccCloudfrontMonitoringSubscriptionConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontmonitoringsubscription"

&dataawscccloudfrontmonitoringsubscription.DataAwsccCloudfrontMonitoringSubscriptionConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudfront_monitoring_subscription#id DataAwsccCloudfrontMonitoringSubscription#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscription <a name="DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscription" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscription.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontmonitoringsubscription"

&dataawscccloudfrontmonitoringsubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscription {

}
```


### DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig <a name="DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontmonitoringsubscription"

&dataawscccloudfrontmonitoringsubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference <a name="DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontmonitoringsubscription"

dataawscccloudfrontmonitoringsubscription.NewDataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.property.realtimeMetricsSubscriptionConfig">RealtimeMetricsSubscriptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference">DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscription">DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscription</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RealtimeMetricsSubscriptionConfig`<sup>Required</sup> <a name="RealtimeMetricsSubscriptionConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.property.realtimeMetricsSubscriptionConfig"></a>

```go
func RealtimeMetricsSubscriptionConfig() DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference">DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscription
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscription">DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscription</a>

---


### DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference <a name="DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontmonitoringsubscription"

dataawscccloudfrontmonitoringsubscription.NewDataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.property.realtimeMetricsSubscriptionStatus">RealtimeMetricsSubscriptionStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig">DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RealtimeMetricsSubscriptionStatus`<sup>Required</sup> <a name="RealtimeMetricsSubscriptionStatus" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.property.realtimeMetricsSubscriptionStatus"></a>

```go
func RealtimeMetricsSubscriptionStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontMonitoringSubscription.DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig">DataAwsccCloudfrontMonitoringSubscriptionMonitoringSubscriptionRealtimeMetricsSubscriptionConfig</a>

---



