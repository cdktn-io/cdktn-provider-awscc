# `dataAwsccQuicksightVpcConnection` Submodule <a name="`dataAwsccQuicksightVpcConnection` Submodule" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccQuicksightVpcConnection <a name="DataAwsccQuicksightVpcConnection" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/quicksight_vpc_connection awscc_quicksight_vpc_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.Initializer"></a>

```typescript
import { dataAwsccQuicksightVpcConnection } from '@cdktn/provider-awscc'

new dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection(scope: Construct, id: string, config: DataAwsccQuicksightVpcConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionConfig">DataAwsccQuicksightVpcConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionConfig">DataAwsccQuicksightVpcConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccQuicksightVpcConnection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.isConstruct"></a>

```typescript
import { dataAwsccQuicksightVpcConnection } from '@cdktn/provider-awscc'

dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.isTerraformElement"></a>

```typescript
import { dataAwsccQuicksightVpcConnection } from '@cdktn/provider-awscc'

dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.isTerraformDataSource"></a>

```typescript
import { dataAwsccQuicksightVpcConnection } from '@cdktn/provider-awscc'

dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.generateConfigForImport"></a>

```typescript
import { dataAwsccQuicksightVpcConnection } from '@cdktn/provider-awscc'

dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccQuicksightVpcConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccQuicksightVpcConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccQuicksightVpcConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/quicksight_vpc_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccQuicksightVpcConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.availabilityStatus">availabilityStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.dnsResolvers">dnsResolvers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.networkInterfaces">networkInterfaces</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesList">DataAwsccQuicksightVpcConnectionNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsList">DataAwsccQuicksightVpcConnectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.vpcConnectionId">vpcConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `availabilityStatus`<sup>Required</sup> <a name="availabilityStatus" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.availabilityStatus"></a>

```typescript
public readonly availabilityStatus: string;
```

- *Type:* string

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `dnsResolvers`<sup>Required</sup> <a name="dnsResolvers" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.dnsResolvers"></a>

```typescript
public readonly dnsResolvers: string[];
```

- *Type:* string[]

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkInterfaces`<sup>Required</sup> <a name="networkInterfaces" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.networkInterfaces"></a>

```typescript
public readonly networkInterfaces: DataAwsccQuicksightVpcConnectionNetworkInterfacesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesList">DataAwsccQuicksightVpcConnectionNetworkInterfacesList</a>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.tags"></a>

```typescript
public readonly tags: DataAwsccQuicksightVpcConnectionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsList">DataAwsccQuicksightVpcConnectionTagsList</a>

---

##### `vpcConnectionId`<sup>Required</sup> <a name="vpcConnectionId" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.vpcConnectionId"></a>

```typescript
public readonly vpcConnectionId: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccQuicksightVpcConnectionConfig <a name="DataAwsccQuicksightVpcConnectionConfig" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionConfig.Initializer"></a>

```typescript
import { dataAwsccQuicksightVpcConnection } from '@cdktn/provider-awscc'

const dataAwsccQuicksightVpcConnectionConfig: dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/quicksight_vpc_connection#id DataAwsccQuicksightVpcConnection#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccQuicksightVpcConnectionNetworkInterfaces <a name="DataAwsccQuicksightVpcConnectionNetworkInterfaces" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfaces.Initializer"></a>

```typescript
import { dataAwsccQuicksightVpcConnection } from '@cdktn/provider-awscc'

const dataAwsccQuicksightVpcConnectionNetworkInterfaces: dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfaces = { ... }
```


### DataAwsccQuicksightVpcConnectionTags <a name="DataAwsccQuicksightVpcConnectionTags" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTags.Initializer"></a>

```typescript
import { dataAwsccQuicksightVpcConnection } from '@cdktn/provider-awscc'

const dataAwsccQuicksightVpcConnectionTags: dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccQuicksightVpcConnectionNetworkInterfacesList <a name="DataAwsccQuicksightVpcConnectionNetworkInterfacesList" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesList.Initializer"></a>

```typescript
import { dataAwsccQuicksightVpcConnection } from '@cdktn/provider-awscc'

new dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesList.get"></a>

```typescript
public get(index: number): DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference <a name="DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightVpcConnection } from '@cdktn/provider-awscc'

new dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfaces">DataAwsccQuicksightVpcConnectionNetworkInterfaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfacesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightVpcConnectionNetworkInterfaces;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionNetworkInterfaces">DataAwsccQuicksightVpcConnectionNetworkInterfaces</a>

---


### DataAwsccQuicksightVpcConnectionTagsList <a name="DataAwsccQuicksightVpcConnectionTagsList" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsList.Initializer"></a>

```typescript
import { dataAwsccQuicksightVpcConnection } from '@cdktn/provider-awscc'

new dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsList.get"></a>

```typescript
public get(index: number): DataAwsccQuicksightVpcConnectionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccQuicksightVpcConnectionTagsOutputReference <a name="DataAwsccQuicksightVpcConnectionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccQuicksightVpcConnection } from '@cdktn/provider-awscc'

new dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTags">DataAwsccQuicksightVpcConnectionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccQuicksightVpcConnectionTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccQuicksightVpcConnection.DataAwsccQuicksightVpcConnectionTags">DataAwsccQuicksightVpcConnectionTags</a>

---



