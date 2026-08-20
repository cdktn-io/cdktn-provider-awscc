# `dataAwsccCloudfrontOriginAccessControl` Submodule <a name="`dataAwsccCloudfrontOriginAccessControl` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudfrontOriginAccessControl <a name="DataAwsccCloudfrontOriginAccessControl" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/cloudfront_origin_access_control awscc_cloudfront_origin_access_control}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.Initializer"></a>

```typescript
import { dataAwsccCloudfrontOriginAccessControl } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl(scope: Construct, id: string, config: DataAwsccCloudfrontOriginAccessControlConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlConfig">DataAwsccCloudfrontOriginAccessControlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlConfig">DataAwsccCloudfrontOriginAccessControlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCloudfrontOriginAccessControl resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.isConstruct"></a>

```typescript
import { dataAwsccCloudfrontOriginAccessControl } from '@cdktn/provider-awscc'

dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.isTerraformElement"></a>

```typescript
import { dataAwsccCloudfrontOriginAccessControl } from '@cdktn/provider-awscc'

dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.isTerraformDataSource"></a>

```typescript
import { dataAwsccCloudfrontOriginAccessControl } from '@cdktn/provider-awscc'

dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.generateConfigForImport"></a>

```typescript
import { dataAwsccCloudfrontOriginAccessControl } from '@cdktn/provider-awscc'

dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccCloudfrontOriginAccessControl resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCloudfrontOriginAccessControl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCloudfrontOriginAccessControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/cloudfront_origin_access_control#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudfrontOriginAccessControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.property.originAccessControlConfig">originAccessControlConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference">DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.property.originAccessControlId">originAccessControlId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `originAccessControlConfig`<sup>Required</sup> <a name="originAccessControlConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.property.originAccessControlConfig"></a>

```typescript
public readonly originAccessControlConfig: DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference">DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference</a>

---

##### `originAccessControlId`<sup>Required</sup> <a name="originAccessControlId" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.property.originAccessControlId"></a>

```typescript
public readonly originAccessControlId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControl.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudfrontOriginAccessControlConfig <a name="DataAwsccCloudfrontOriginAccessControlConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlConfig.Initializer"></a>

```typescript
import { dataAwsccCloudfrontOriginAccessControl } from '@cdktn/provider-awscc'

const dataAwsccCloudfrontOriginAccessControlConfig: dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/cloudfront_origin_access_control#id DataAwsccCloudfrontOriginAccessControl#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfig <a name="DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfig.Initializer"></a>

```typescript
import { dataAwsccCloudfrontOriginAccessControl } from '@cdktn/provider-awscc'

const dataAwsccCloudfrontOriginAccessControlOriginAccessControlConfig: dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfig = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference <a name="DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudfrontOriginAccessControl } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.originAccessControlOriginType">originAccessControlOriginType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.signingBehavior">signingBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.signingProtocol">signingProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfig">DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `originAccessControlOriginType`<sup>Required</sup> <a name="originAccessControlOriginType" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.originAccessControlOriginType"></a>

```typescript
public readonly originAccessControlOriginType: string;
```

- *Type:* string

---

##### `signingBehavior`<sup>Required</sup> <a name="signingBehavior" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.signingBehavior"></a>

```typescript
public readonly signingBehavior: string;
```

- *Type:* string

---

##### `signingProtocol`<sup>Required</sup> <a name="signingProtocol" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.signingProtocol"></a>

```typescript
public readonly signingProtocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontOriginAccessControl.DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfig">DataAwsccCloudfrontOriginAccessControlOriginAccessControlConfig</a>

---



