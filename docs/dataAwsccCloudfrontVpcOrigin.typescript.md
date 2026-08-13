# `dataAwsccCloudfrontVpcOrigin` Submodule <a name="`dataAwsccCloudfrontVpcOrigin` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudfrontVpcOrigin <a name="DataAwsccCloudfrontVpcOrigin" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudfront_vpc_origin awscc_cloudfront_vpc_origin}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.Initializer"></a>

```typescript
import { dataAwsccCloudfrontVpcOrigin } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin(scope: Construct, id: string, config: DataAwsccCloudfrontVpcOriginConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig">DataAwsccCloudfrontVpcOriginConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig">DataAwsccCloudfrontVpcOriginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCloudfrontVpcOrigin resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.isConstruct"></a>

```typescript
import { dataAwsccCloudfrontVpcOrigin } from '@cdktn/provider-awscc'

dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.isTerraformElement"></a>

```typescript
import { dataAwsccCloudfrontVpcOrigin } from '@cdktn/provider-awscc'

dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.isTerraformDataSource"></a>

```typescript
import { dataAwsccCloudfrontVpcOrigin } from '@cdktn/provider-awscc'

dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.generateConfigForImport"></a>

```typescript
import { dataAwsccCloudfrontVpcOrigin } from '@cdktn/provider-awscc'

dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccCloudfrontVpcOrigin resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCloudfrontVpcOrigin to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCloudfrontVpcOrigin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudfront_vpc_origin#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudfrontVpcOrigin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.lastModifiedTime">lastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList">DataAwsccCloudfrontVpcOriginTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.vpcOriginEndpointConfig">vpcOriginEndpointConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference">DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.vpcOriginId">vpcOriginId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.tags"></a>

```typescript
public readonly tags: DataAwsccCloudfrontVpcOriginTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList">DataAwsccCloudfrontVpcOriginTagsList</a>

---

##### `vpcOriginEndpointConfig`<sup>Required</sup> <a name="vpcOriginEndpointConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.vpcOriginEndpointConfig"></a>

```typescript
public readonly vpcOriginEndpointConfig: DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference">DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference</a>

---

##### `vpcOriginId`<sup>Required</sup> <a name="vpcOriginId" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.vpcOriginId"></a>

```typescript
public readonly vpcOriginId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOrigin.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudfrontVpcOriginConfig <a name="DataAwsccCloudfrontVpcOriginConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.Initializer"></a>

```typescript
import { dataAwsccCloudfrontVpcOrigin } from '@cdktn/provider-awscc'

const dataAwsccCloudfrontVpcOriginConfig: dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudfront_vpc_origin#id DataAwsccCloudfrontVpcOrigin#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudfrontVpcOriginTags <a name="DataAwsccCloudfrontVpcOriginTags" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTags.Initializer"></a>

```typescript
import { dataAwsccCloudfrontVpcOrigin } from '@cdktn/provider-awscc'

const dataAwsccCloudfrontVpcOriginTags: dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTags = { ... }
```


### DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfig <a name="DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfig.Initializer"></a>

```typescript
import { dataAwsccCloudfrontVpcOrigin } from '@cdktn/provider-awscc'

const dataAwsccCloudfrontVpcOriginVpcOriginEndpointConfig: dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudfrontVpcOriginTagsList <a name="DataAwsccCloudfrontVpcOriginTagsList" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.Initializer"></a>

```typescript
import { dataAwsccCloudfrontVpcOrigin } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.get"></a>

```typescript
public get(index: number): DataAwsccCloudfrontVpcOriginTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCloudfrontVpcOriginTagsOutputReference <a name="DataAwsccCloudfrontVpcOriginTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudfrontVpcOrigin } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTags">DataAwsccCloudfrontVpcOriginTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudfrontVpcOriginTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginTags">DataAwsccCloudfrontVpcOriginTags</a>

---


### DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference <a name="DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudfrontVpcOrigin } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.httpPort">httpPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.httpsPort">httpsPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.originProtocolPolicy">originProtocolPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.originSslProtocols">originSslProtocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfig">DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `httpPort`<sup>Required</sup> <a name="httpPort" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.httpPort"></a>

```typescript
public readonly httpPort: number;
```

- *Type:* number

---

##### `httpsPort`<sup>Required</sup> <a name="httpsPort" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.httpsPort"></a>

```typescript
public readonly httpsPort: number;
```

- *Type:* number

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `originProtocolPolicy`<sup>Required</sup> <a name="originProtocolPolicy" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.originProtocolPolicy"></a>

```typescript
public readonly originProtocolPolicy: string;
```

- *Type:* string

---

##### `originSslProtocols`<sup>Required</sup> <a name="originSslProtocols" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.originSslProtocols"></a>

```typescript
public readonly originSslProtocols: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontVpcOrigin.DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfig">DataAwsccCloudfrontVpcOriginVpcOriginEndpointConfig</a>

---



