# `dataAwsccRoute53HostedZone` Submodule <a name="`dataAwsccRoute53HostedZone` Submodule" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRoute53HostedZone <a name="DataAwsccRoute53HostedZone" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/route53_hosted_zone awscc_route53_hosted_zone}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53hostedzone"

dataawsccroute53hostedzone.NewDataAwsccRoute53HostedZone(scope Construct, id *string, config DataAwsccRoute53HostedZoneConfig) DataAwsccRoute53HostedZone
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneConfig">DataAwsccRoute53HostedZoneConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneConfig">DataAwsccRoute53HostedZoneConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRoute53HostedZone resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53hostedzone"

dataawsccroute53hostedzone.DataAwsccRoute53HostedZone_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53hostedzone"

dataawsccroute53hostedzone.DataAwsccRoute53HostedZone_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53hostedzone"

dataawsccroute53hostedzone.DataAwsccRoute53HostedZone_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53hostedzone"

dataawsccroute53hostedzone.DataAwsccRoute53HostedZone_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccRoute53HostedZone resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccRoute53HostedZone to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccRoute53HostedZone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/route53_hosted_zone#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRoute53HostedZone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.hostedZoneConfig">HostedZoneConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference">DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.hostedZoneFeatures">HostedZoneFeatures</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference">DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.hostedZoneId">HostedZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.hostedZoneTags">HostedZoneTags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsList">DataAwsccRoute53HostedZoneHostedZoneTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.nameServers">NameServers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.queryLoggingConfig">QueryLoggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference">DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.vpCs">VpCs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsList">DataAwsccRoute53HostedZoneVpCsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `HostedZoneConfig`<sup>Required</sup> <a name="HostedZoneConfig" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.hostedZoneConfig"></a>

```go
func HostedZoneConfig() DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference">DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference</a>

---

##### `HostedZoneFeatures`<sup>Required</sup> <a name="HostedZoneFeatures" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.hostedZoneFeatures"></a>

```go
func HostedZoneFeatures() DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference">DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference</a>

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.hostedZoneId"></a>

```go
func HostedZoneId() *string
```

- *Type:* *string

---

##### `HostedZoneTags`<sup>Required</sup> <a name="HostedZoneTags" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.hostedZoneTags"></a>

```go
func HostedZoneTags() DataAwsccRoute53HostedZoneHostedZoneTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsList">DataAwsccRoute53HostedZoneHostedZoneTagsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NameServers`<sup>Required</sup> <a name="NameServers" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.nameServers"></a>

```go
func NameServers() *[]*string
```

- *Type:* *[]*string

---

##### `QueryLoggingConfig`<sup>Required</sup> <a name="QueryLoggingConfig" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.queryLoggingConfig"></a>

```go
func QueryLoggingConfig() DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference">DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference</a>

---

##### `VpCs`<sup>Required</sup> <a name="VpCs" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.vpCs"></a>

```go
func VpCs() DataAwsccRoute53HostedZoneVpCsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsList">DataAwsccRoute53HostedZoneVpCsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZone.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRoute53HostedZoneConfig <a name="DataAwsccRoute53HostedZoneConfig" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53hostedzone"

&dataawsccroute53hostedzone.DataAwsccRoute53HostedZoneConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/route53_hosted_zone#id DataAwsccRoute53HostedZone#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRoute53HostedZoneHostedZoneConfig <a name="DataAwsccRoute53HostedZoneHostedZoneConfig" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53hostedzone"

&dataawsccroute53hostedzone.DataAwsccRoute53HostedZoneHostedZoneConfig {

}
```


### DataAwsccRoute53HostedZoneHostedZoneFeatures <a name="DataAwsccRoute53HostedZoneHostedZoneFeatures" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeatures.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53hostedzone"

&dataawsccroute53hostedzone.DataAwsccRoute53HostedZoneHostedZoneFeatures {

}
```


### DataAwsccRoute53HostedZoneHostedZoneTags <a name="DataAwsccRoute53HostedZoneHostedZoneTags" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53hostedzone"

&dataawsccroute53hostedzone.DataAwsccRoute53HostedZoneHostedZoneTags {

}
```


### DataAwsccRoute53HostedZoneQueryLoggingConfig <a name="DataAwsccRoute53HostedZoneQueryLoggingConfig" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53hostedzone"

&dataawsccroute53hostedzone.DataAwsccRoute53HostedZoneQueryLoggingConfig {

}
```


### DataAwsccRoute53HostedZoneVpCs <a name="DataAwsccRoute53HostedZoneVpCs" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53hostedzone"

&dataawsccroute53hostedzone.DataAwsccRoute53HostedZoneVpCs {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference <a name="DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53hostedzone"

dataawsccroute53hostedzone.NewDataAwsccRoute53HostedZoneHostedZoneConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfig">DataAwsccRoute53HostedZoneHostedZoneConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRoute53HostedZoneHostedZoneConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneConfig">DataAwsccRoute53HostedZoneHostedZoneConfig</a>

---


### DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference <a name="DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53hostedzone"

dataawsccroute53hostedzone.NewDataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.property.enableAcceleratedRecovery">EnableAcceleratedRecovery</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeatures">DataAwsccRoute53HostedZoneHostedZoneFeatures</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableAcceleratedRecovery`<sup>Required</sup> <a name="EnableAcceleratedRecovery" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.property.enableAcceleratedRecovery"></a>

```go
func EnableAcceleratedRecovery() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeaturesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRoute53HostedZoneHostedZoneFeatures
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneFeatures">DataAwsccRoute53HostedZoneHostedZoneFeatures</a>

---


### DataAwsccRoute53HostedZoneHostedZoneTagsList <a name="DataAwsccRoute53HostedZoneHostedZoneTagsList" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53hostedzone"

dataawsccroute53hostedzone.NewDataAwsccRoute53HostedZoneHostedZoneTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccRoute53HostedZoneHostedZoneTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsList.get"></a>

```go
func Get(index *f64) DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference <a name="DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53hostedzone"

dataawsccroute53hostedzone.NewDataAwsccRoute53HostedZoneHostedZoneTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTags">DataAwsccRoute53HostedZoneHostedZoneTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRoute53HostedZoneHostedZoneTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneHostedZoneTags">DataAwsccRoute53HostedZoneHostedZoneTags</a>

---


### DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference <a name="DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53hostedzone"

dataawsccroute53hostedzone.NewDataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.property.cloudwatchLogsLogGroupArn">CloudwatchLogsLogGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfig">DataAwsccRoute53HostedZoneQueryLoggingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchLogsLogGroupArn`<sup>Required</sup> <a name="CloudwatchLogsLogGroupArn" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.property.cloudwatchLogsLogGroupArn"></a>

```go
func CloudwatchLogsLogGroupArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRoute53HostedZoneQueryLoggingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneQueryLoggingConfig">DataAwsccRoute53HostedZoneQueryLoggingConfig</a>

---


### DataAwsccRoute53HostedZoneVpCsList <a name="DataAwsccRoute53HostedZoneVpCsList" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53hostedzone"

dataawsccroute53hostedzone.NewDataAwsccRoute53HostedZoneVpCsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccRoute53HostedZoneVpCsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsList.get"></a>

```go
func Get(index *f64) DataAwsccRoute53HostedZoneVpCsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccRoute53HostedZoneVpCsOutputReference <a name="DataAwsccRoute53HostedZoneVpCsOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53hostedzone"

dataawsccroute53hostedzone.NewDataAwsccRoute53HostedZoneVpCsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccRoute53HostedZoneVpCsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.property.vpcRegion">VpcRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCs">DataAwsccRoute53HostedZoneVpCs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `VpcRegion`<sup>Required</sup> <a name="VpcRegion" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.property.vpcRegion"></a>

```go
func VpcRegion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRoute53HostedZoneVpCs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53HostedZone.DataAwsccRoute53HostedZoneVpCs">DataAwsccRoute53HostedZoneVpCs</a>

---



