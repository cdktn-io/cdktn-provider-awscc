# `dataAwsccRoute53RecordSet` Submodule <a name="`dataAwsccRoute53RecordSet` Submodule" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRoute53RecordSet <a name="DataAwsccRoute53RecordSet" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/route53_record_set awscc_route53_record_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.Initializer"></a>

```typescript
import { dataAwsccRoute53RecordSet } from '@cdktn/provider-awscc'

new dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet(scope: Construct, id: string, config: DataAwsccRoute53RecordSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetConfig">DataAwsccRoute53RecordSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetConfig">DataAwsccRoute53RecordSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRoute53RecordSet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.isConstruct"></a>

```typescript
import { dataAwsccRoute53RecordSet } from '@cdktn/provider-awscc'

dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.isTerraformElement"></a>

```typescript
import { dataAwsccRoute53RecordSet } from '@cdktn/provider-awscc'

dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.isTerraformDataSource"></a>

```typescript
import { dataAwsccRoute53RecordSet } from '@cdktn/provider-awscc'

dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.generateConfigForImport"></a>

```typescript
import { dataAwsccRoute53RecordSet } from '@cdktn/provider-awscc'

dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccRoute53RecordSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccRoute53RecordSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccRoute53RecordSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/route53_record_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRoute53RecordSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.aliasTarget">aliasTarget</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference">DataAwsccRoute53RecordSetAliasTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.cidrRoutingConfig">cidrRoutingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference">DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.failover">failover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.geoLocation">geoLocation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference">DataAwsccRoute53RecordSetGeoLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.geoProximityLocation">geoProximityLocation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference">DataAwsccRoute53RecordSetGeoProximityLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.healthCheckId">healthCheckId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.hostedZoneName">hostedZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.multiValueAnswer">multiValueAnswer</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.recordSetId">recordSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.resourceRecords">resourceRecords</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.setIdentifier">setIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.ttl">ttl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `aliasTarget`<sup>Required</sup> <a name="aliasTarget" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.aliasTarget"></a>

```typescript
public readonly aliasTarget: DataAwsccRoute53RecordSetAliasTargetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference">DataAwsccRoute53RecordSetAliasTargetOutputReference</a>

---

##### `cidrRoutingConfig`<sup>Required</sup> <a name="cidrRoutingConfig" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.cidrRoutingConfig"></a>

```typescript
public readonly cidrRoutingConfig: DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference">DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `failover`<sup>Required</sup> <a name="failover" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.failover"></a>

```typescript
public readonly failover: string;
```

- *Type:* string

---

##### `geoLocation`<sup>Required</sup> <a name="geoLocation" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.geoLocation"></a>

```typescript
public readonly geoLocation: DataAwsccRoute53RecordSetGeoLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference">DataAwsccRoute53RecordSetGeoLocationOutputReference</a>

---

##### `geoProximityLocation`<sup>Required</sup> <a name="geoProximityLocation" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.geoProximityLocation"></a>

```typescript
public readonly geoProximityLocation: DataAwsccRoute53RecordSetGeoProximityLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference">DataAwsccRoute53RecordSetGeoProximityLocationOutputReference</a>

---

##### `healthCheckId`<sup>Required</sup> <a name="healthCheckId" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.healthCheckId"></a>

```typescript
public readonly healthCheckId: string;
```

- *Type:* string

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

---

##### `hostedZoneName`<sup>Required</sup> <a name="hostedZoneName" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.hostedZoneName"></a>

```typescript
public readonly hostedZoneName: string;
```

- *Type:* string

---

##### `multiValueAnswer`<sup>Required</sup> <a name="multiValueAnswer" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.multiValueAnswer"></a>

```typescript
public readonly multiValueAnswer: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `recordSetId`<sup>Required</sup> <a name="recordSetId" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.recordSetId"></a>

```typescript
public readonly recordSetId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `resourceRecords`<sup>Required</sup> <a name="resourceRecords" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.resourceRecords"></a>

```typescript
public readonly resourceRecords: string[];
```

- *Type:* string[]

---

##### `setIdentifier`<sup>Required</sup> <a name="setIdentifier" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.setIdentifier"></a>

```typescript
public readonly setIdentifier: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRoute53RecordSetAliasTarget <a name="DataAwsccRoute53RecordSetAliasTarget" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTarget.Initializer"></a>

```typescript
import { dataAwsccRoute53RecordSet } from '@cdktn/provider-awscc'

const dataAwsccRoute53RecordSetAliasTarget: dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTarget = { ... }
```


### DataAwsccRoute53RecordSetCidrRoutingConfig <a name="DataAwsccRoute53RecordSetCidrRoutingConfig" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfig.Initializer"></a>

```typescript
import { dataAwsccRoute53RecordSet } from '@cdktn/provider-awscc'

const dataAwsccRoute53RecordSetCidrRoutingConfig: dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfig = { ... }
```


### DataAwsccRoute53RecordSetConfig <a name="DataAwsccRoute53RecordSetConfig" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetConfig.Initializer"></a>

```typescript
import { dataAwsccRoute53RecordSet } from '@cdktn/provider-awscc'

const dataAwsccRoute53RecordSetConfig: dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/route53_record_set#id DataAwsccRoute53RecordSet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRoute53RecordSetGeoLocation <a name="DataAwsccRoute53RecordSetGeoLocation" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocation.Initializer"></a>

```typescript
import { dataAwsccRoute53RecordSet } from '@cdktn/provider-awscc'

const dataAwsccRoute53RecordSetGeoLocation: dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocation = { ... }
```


### DataAwsccRoute53RecordSetGeoProximityLocation <a name="DataAwsccRoute53RecordSetGeoProximityLocation" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocation.Initializer"></a>

```typescript
import { dataAwsccRoute53RecordSet } from '@cdktn/provider-awscc'

const dataAwsccRoute53RecordSetGeoProximityLocation: dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocation = { ... }
```


### DataAwsccRoute53RecordSetGeoProximityLocationCoordinates <a name="DataAwsccRoute53RecordSetGeoProximityLocationCoordinates" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinates.Initializer"></a>

```typescript
import { dataAwsccRoute53RecordSet } from '@cdktn/provider-awscc'

const dataAwsccRoute53RecordSetGeoProximityLocationCoordinates: dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinates = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRoute53RecordSetAliasTargetOutputReference <a name="DataAwsccRoute53RecordSetAliasTargetOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.Initializer"></a>

```typescript
import { dataAwsccRoute53RecordSet } from '@cdktn/provider-awscc'

new dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.property.evaluateTargetHealth">evaluateTargetHealth</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTarget">DataAwsccRoute53RecordSetAliasTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `evaluateTargetHealth`<sup>Required</sup> <a name="evaluateTargetHealth" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.property.evaluateTargetHealth"></a>

```typescript
public readonly evaluateTargetHealth: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRoute53RecordSetAliasTarget;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetAliasTarget">DataAwsccRoute53RecordSetAliasTarget</a>

---


### DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference <a name="DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccRoute53RecordSet } from '@cdktn/provider-awscc'

new dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.property.collectionId">collectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.property.locationName">locationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfig">DataAwsccRoute53RecordSetCidrRoutingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

---

##### `locationName`<sup>Required</sup> <a name="locationName" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.property.locationName"></a>

```typescript
public readonly locationName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRoute53RecordSetCidrRoutingConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetCidrRoutingConfig">DataAwsccRoute53RecordSetCidrRoutingConfig</a>

---


### DataAwsccRoute53RecordSetGeoLocationOutputReference <a name="DataAwsccRoute53RecordSetGeoLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.Initializer"></a>

```typescript
import { dataAwsccRoute53RecordSet } from '@cdktn/provider-awscc'

new dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.property.continentCode">continentCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.property.countryCode">countryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.property.subdivisionCode">subdivisionCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocation">DataAwsccRoute53RecordSetGeoLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `continentCode`<sup>Required</sup> <a name="continentCode" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.property.continentCode"></a>

```typescript
public readonly continentCode: string;
```

- *Type:* string

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

---

##### `subdivisionCode`<sup>Required</sup> <a name="subdivisionCode" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.property.subdivisionCode"></a>

```typescript
public readonly subdivisionCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRoute53RecordSetGeoLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoLocation">DataAwsccRoute53RecordSetGeoLocation</a>

---


### DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference <a name="DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.Initializer"></a>

```typescript
import { dataAwsccRoute53RecordSet } from '@cdktn/provider-awscc'

new dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.property.latitude">latitude</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.property.longitude">longitude</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinates">DataAwsccRoute53RecordSetGeoProximityLocationCoordinates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `latitude`<sup>Required</sup> <a name="latitude" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.property.latitude"></a>

```typescript
public readonly latitude: string;
```

- *Type:* string

---

##### `longitude`<sup>Required</sup> <a name="longitude" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.property.longitude"></a>

```typescript
public readonly longitude: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRoute53RecordSetGeoProximityLocationCoordinates;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinates">DataAwsccRoute53RecordSetGeoProximityLocationCoordinates</a>

---


### DataAwsccRoute53RecordSetGeoProximityLocationOutputReference <a name="DataAwsccRoute53RecordSetGeoProximityLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.Initializer"></a>

```typescript
import { dataAwsccRoute53RecordSet } from '@cdktn/provider-awscc'

new dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.property.awsRegion">awsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.property.bias">bias</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.property.coordinates">coordinates</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference">DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.property.localZoneGroup">localZoneGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocation">DataAwsccRoute53RecordSetGeoProximityLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

---

##### `bias`<sup>Required</sup> <a name="bias" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.property.bias"></a>

```typescript
public readonly bias: number;
```

- *Type:* number

---

##### `coordinates`<sup>Required</sup> <a name="coordinates" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.property.coordinates"></a>

```typescript
public readonly coordinates: DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference">DataAwsccRoute53RecordSetGeoProximityLocationCoordinatesOutputReference</a>

---

##### `localZoneGroup`<sup>Required</sup> <a name="localZoneGroup" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.property.localZoneGroup"></a>

```typescript
public readonly localZoneGroup: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRoute53RecordSetGeoProximityLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecordSet.DataAwsccRoute53RecordSetGeoProximityLocation">DataAwsccRoute53RecordSetGeoProximityLocation</a>

---



